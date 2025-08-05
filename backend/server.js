// app.js

const express = require("express");
const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: '../.env' });
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Neon connection
const sql = neon(process.env.PG_DATABASE_URL);


// Test route to check connection
app.get("/version", async (req, res) => {
  try {
    const result = await sql`SELECT version()`;
    res.status(200).send(result[0].version);
  } catch (err) {
    console.error("Error getting version:", err);
    res.status(500).json({ error: "Failed to fetch DB version" });
  }
});

// Main route to read data
app.get("/read-db", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM taskList`;
    console.log(result)
    res.json(result);
  } catch (error) {
    console.error("Error reading from database:", error);
    res.status(500).json({ error: "Database read failed" });
  }
});

// Post to tasklist
app.post("/add-task", async (req, res) => {
  console.log("Icoming Data", req.body)
  try {
    const { taskItem, dueDate, priority, status } = req.body;
    console.log("Received:", req.body);
    if (!taskItem || !dueDate || !priority || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await sql`
      INSERT INTO tasklist ("taskItem", "dueDate", "priority", "status")
      VALUES (${taskItem}, ${dueDate}, ${priority}, ${status})
      RETURNING *;
    `;

    res.status(201).json(result[0]);
  } catch (error) {
    console.error("Error posting task:", error);
    res.status(500).json({ error: "DB post task failed" });
  }
});


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

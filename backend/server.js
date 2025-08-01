// app.js

const express = require("express");
const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: '../.env' });
const app = express();
const port = 3000;

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


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

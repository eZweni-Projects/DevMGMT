// app.js

const express = require("express");
const { neon } = require("@neondatabase/serverless");
require("dotenv").config({ path: '../.env' });
const app = express();
const port = 3000;
const cors = require('cors');
const { generateTasksFromText} = require("../aiModel")

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
  // Order by Date
   const { sort } = req.query;

  let orderBy = 'ORDER BY "dueDate" ASC'; // default
  if (sort === "date_desc") {
    orderBy = 'ORDER BY "priority" DESC';
  }
  try {
    const result = await sql`SELECT * FROM taskList`;
    console.log(result)
    res.json(result);
  } catch (error) {
    console.error("Error reading from database:", error);
    res.status(500).json({ error: "Database read failed" });
  }
});

// Route to read AI generated data
app.get("/ai-db", async (req, res) => {
  // Order by Date
   const { sort } = req.query;

  try {
    const result = await sql`SELECT * FROM aitasks`;
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
    if (!taskItem || !priority || !status) {
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

// Extracted text route
app.post('/textExtract', async (req, res) => {
  console.log("Extracted Text Received", req.body.text)
  const extractedText = req.body.text;

  if (!extractedText) {
    return res.status(400).json({ error: "No Text Received" });
  }

  try {
    let tasks = await generateTasksFromText(extractedText)

    if (typeof tasks === 'string') {
      tasks = JSON.parse(tasks)
    }
    console.log("AI tasks parsed", typeof tasks)
    console.log("AI tasks parsed", tasks)

    

    for (const task of tasks) {
      const { taskItem, dueDate, priority } = task;
      if (!taskItem || !priority) continue;
      const status = 'pending'

      await sql `
        INSERT INTO aitasks ("taskItem", "dueDate", "priority", "status", "createdAt")
        VALUES (${taskItem}, ${dueDate}, ${priority}, ${status}, now());
      `
    }


    res.json({ tasks });
  } catch (err) {
    console.error("Error in AI processing", err)
    res.status(500).json({ error: "AI processiong failed"})
  }
});




// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

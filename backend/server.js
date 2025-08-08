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

// Edit task item from Tasklist
app.put("/edit-task/:id", async (req, res) => {
  const { id } = req.params;
  const { taskItem, dueDate, priority, status } = req.body;

  if (!taskItem || !priority || !status) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await sql`
      UPDATE tasklist
      SET "taskItem" = ${taskItem},
          "dueDate" = ${dueDate},
          "priority" = ${priority},
          "status" = ${status}
      WHERE id = ${id}
      RETURNING *;
    `;

    if (result.length === 0) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(result[0]);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ error: "DB update task failed" });
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

// Delete User Entries
    app.delete('/delete/:task_id', async (req, res) => {
      try {
        const { task_id } = req.params;
        const deletedTask = await sql `
        DELETE FROM taskList
        WHERE id = ${task_id}
        RETURNING *`;

        res.json({ message: "Task Deleted Successfully", deletedTask: deletedTask[0] });
        console.log({ message: "Task Deleted Successfully", DELETED : deletedTask[0] });
      } catch (error) {
        console.error('Error while deleting task', error)
        res.status(500).json({ error: "Failed to delete task"})
      }
    });

// Delete AI suggestions
    app.delete('/delete/:task_id', async (req, res) => {
      try {
        const { task_id } = req.params;
        const rejectedTask = await sql `
        DELETE FROM aitasks
        WHERE id = ${task_id}
        RETURNING *`;

        res.json({ message: "AI suggestion Successfully Rejected", rejectedTask: rejectedTask[0] });
        console.log({ message: "Task Successfully Rejected", REJECTED : rejectedTask[0] });
      } catch (error) {
        console.error('Error while deleting task', error)
        res.status(500).json({ error: "Failed to delete task"})
      }
    });

    // Accept AI Suggestion (Update to Backlog)
    app.patch('/updateStatus/:task_id/', async (req, res) => {
      try {
        const { task_id } = req.params;
        updatedStatus = await sql `
        UPDATE aitasks
        SET status = 'backlog'
        WHERE id = ${task_id}
        RETURNING *
        `
        res.json({ message: "Task has been accepted", updatedStatus: updatedStatus[0]})
      } catch (error) {
        console.error("Error updating status", error)
        res.status(500).json({ errpr: "Failed to update Status"});
      }
    });




// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

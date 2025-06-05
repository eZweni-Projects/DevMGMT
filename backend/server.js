const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('tasks.db', (err) => {
    if (err) console.error(err.message);
    else console.log('Connected to SQLite3 database')
 });


// Table Creation


// db.run(`CREATE TABLE IF NOT EXISTS status (
//     id PRIMARY KEY  TEXT,
//     inprogress TEXT,
//     completed TEXT
// )`);  





app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
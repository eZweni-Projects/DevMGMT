require('dotenv').config();

console.log(process.env.DATABASE_URL)

const { Pool } = require('pg');

// const pool = new Pool ({
//     user: process.env.DB_USER ,
//     password: process.env.PASSWORD,
//     password: process.env.PGPASSWORD,
//     host: process.env.DB_HOST,
//     database: process.env.DB_DATABASE,
//     port: process.env.DB_PORT,
//       ssl: {
//     rejectUnauthorized: false
//   }
// });
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
    .then(() => console.log("Connected to postgreSQL!"))
    .catch((err) => {
        console.error("Database coNNection failed");
        console.error(err.message);
    })



module.exports = pool;


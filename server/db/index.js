require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: process.env.LOCAL_PW,
  host: "localhost",
  port: 5432,
  database: "friends",
});

module.exports = pool;

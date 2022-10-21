require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

let sql = "SELECT * from Users";

pool.execute(sql, (err, results) => {
    if(err) throw err;
    results.forEach(item => console.log(item['Name']))
    //console.log(results)
})


module.exports = pool.promise();
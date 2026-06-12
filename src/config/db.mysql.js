const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"inventory"
});

module.exports = pool;



// CREATE TABLE users(
// id INT AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(255),
// email VARCHAR(255),
// password VARCHAR(255)
// );




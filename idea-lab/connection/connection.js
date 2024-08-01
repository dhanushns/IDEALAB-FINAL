const mysql = require("mysql");

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

db.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("connected");
    }
});

module.exports = db;
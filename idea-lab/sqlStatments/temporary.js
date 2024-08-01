const db = require("../connection/connection");
const { deleteOtp } = require("./deleteotp");

const temporary = (req, res, next) => {
    try {
        // const sql = `
        // CREATE TABLE IF NOT EXISTS temporary (
        //     Email varchar(50) primary key,
        //     Token varchar(150),
        //     password varchar(150)
        // )
        // `;

        const sql = `INSERT INTO temporary (Email, Password) VALUES (?, ?)`;

    // const sql = `ALTER TABLE temporary MODIFY COLUMN Token VARCHAR(500)`;


        db.query(sql, req.value, (err, result) => {

            if (err) {
                return res.status(404).json({ error: true });
            } else {
                deleteOtp(req.body.email, (err, results) =>{
                    if (err) return res.status(404).json({ error: true });
                    next();
                });
            }
        });
    }catch(err){
        if (err) return res.status(404).json({ error: true });
    }
}

module.exports = { temporary };
const db = require("../connection/connection");

const otptable = (to, value) => {
    try {
        // const sql = `
        // CREATE TABLE IF NOT EXISTS otp (
        //     Email varchar(50) primary key,
        //     otp varchar(500)
        // )
        // `;

        const sql = `INSERT INTO otp (Email, otp) VALUES (?, ?) ON DUPLICATE KEY UPDATE otp = ?`;

        // const sql = `ALTER TABLE hostInstituteFaculty MODIFY COLUMN DateofBirth VARCHAR(15)`;


        db.query(sql, [to, value, value], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("created");
            }
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { otptable };
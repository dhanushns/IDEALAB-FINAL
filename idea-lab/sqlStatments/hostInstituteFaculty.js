const db = require("../connection/connection");

const user = (value, callback) => {
    try {
        // const sql = `
        // CREATE TABLE IF NOT EXISTS hostInstituteFaculty (
        //     Email varchar(50) primary key,
        //     FacultyName varchar(50),
        //     Designation varchar(50),
        //     Department varchar(50),
        //     FacultyID varchar(15) UNIQUE,
        //     DateofBirth DATE,
        //     MobileNumber varchar(50) UNIQUE,
        //     Token varchar(150),
        //     password varchar(150)
        // )
        // `;

        const email = value[0];

        const selectSQL = `
            SELECT COUNT(*) AS count FROM hostInstituteFaculty WHERE email = ?
        `;

        db.query(selectSQL, [email], (err, result) => {
            if (err) return callback(err, null);

            const count = result[0].count;
            if (count > 0) {
                return callback(null, "Record already exists");
            }


            const sql = `INSERT INTO hostInstituteFaculty (
            Email, FacultyName, Designation, 
            Department, FacultyID, DateofBirth, 
            MobileNumber, Token, Password
        ) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

            // const sql = `ALTER TABLE hostInstituteFaculty MODIFY COLUMN DateofBirth VARCHAR(15)`;


            db.query(sql, value, (err, result) => {
                if (err) return callback(err, null)
                return callback(null, result)
            });
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { user };
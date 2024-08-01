const db = require("../connection/connection");

const hostStudent = (values, callback) => {
    try {
        const email = values[0];
        
        const checkIfExistsSQL = `
            SELECT COUNT(*) AS count FROM hostStudent WHERE email = ?
        `;
        
        db.query(checkIfExistsSQL, [email], (err, result) => {
            if (err) return callback(err, null);
            
            const count = result[0].count;
            
            if (count > 0) {
                return callback(null, "Record already exists");
            }
            
            const insertSQL = `
                INSERT INTO hostStudent(email, name, phone, programme,
                    regNo, semester, yearOfGraduate, 
                    yearOfStudy, password, dob, course
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            
            db.query(insertSQL, values, (err, result) => {
                if (err) return callback(err, null);
                return callback(null, "Record inserted successfully");
            });
        });
    } catch (err) {
        return callback(err, null);
    }
};

module.exports = { hostStudent };

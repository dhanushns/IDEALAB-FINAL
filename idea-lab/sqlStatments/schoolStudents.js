const db = require("../connection/connection");

const schoolStudents = (value, callback) => {
    try {

        const email = value[0];

        const selectSQL = `
            SELECT COUNT(*) AS count FROM schoolStudents WHERE email = ?
        `;

        db.query(selectSQL, [email], (err, result) => {
            if (err) return callback(err, null);

            const count = result[0].count;
            if (count > 0) {
                return callback(null, "Record already exists");
            }

            const sql = `
        INSERT INTO schoolStudents(
            email, name, dob, 
            phone, address, studentId, 
            schoolName, udiseCode, password
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
            db.query(sql, value, (err, result) => {
                if (err) return callback(err, null);
                return callback(null, result)
            });
        });
    } catch (err) {
        return callback(err, null);
    }
}

module.exports = { schoolStudents };
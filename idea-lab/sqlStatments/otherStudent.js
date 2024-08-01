const db = require("../connection/connection");

const otherStudent = (value, callback) => {
    try {

        const email = value[0];

        const selectSQL = `
            SELECT COUNT(*) AS count FROM otherStudent WHERE email = ?
        `;

        db.query(selectSQL, [email], (err, result) => {
            if (err) return callback(err, null);

            const count = result[0].count;
            if (count > 0) {
                return callback(null, "Record already exists");
            }

            const sql = `
        INSERT INTO otherStudent (
            email, name, dob, phone, 
            address, studentId, programme, course, 
            semester, yearOfStudy, yearOfGraduation, password
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
            db.query(sql, value, (err, result) => {
                if (err) return callback(err, null);
                return callback(null, result);
            });
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { otherStudent };
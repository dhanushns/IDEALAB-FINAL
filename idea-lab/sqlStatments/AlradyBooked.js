const db = require("../connection/connection");

const AlradyBooked = (value, callback) => {
    try {
        const sql = `
    SELECT * FROM booking 
    WHERE (process = 'Approved' AND equipment = ? AND ((inTime <= ? AND outTime >= ?)
        OR (inTime <= ? AND outTime >= ?)
        OR (inTime >= ? AND outTime <= ?)))
    
    `;
        db.query(sql, value, (err, result) => {
            if (err) {
                console.error("Error executing SQL query:", err);
                return callback(err, null);
            }
            return callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { AlradyBooked };

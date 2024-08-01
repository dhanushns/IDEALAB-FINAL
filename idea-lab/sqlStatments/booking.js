const db = require("../connection/connection");

const booking = (value, callback) => {
    try {
        const sql = `
        INSERT INTO booking (
            email, equipment, purpose, inTime, outTime, rawMaterialRequirement
        )
        VALUES (
            ?, ?, ?, ?, ?, ?
        )
    `;

        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }

}

module.exports = { booking };
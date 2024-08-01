const db = require("../connection/connection");

const equipmentAlrady = (value, callback) => {

    try {
        // const sql = `
        // CREATE TABLE equipment (
        //     name VARCHAR(50) PRIMARY KEY,
        //     count INT
        // )
        // `;

        const sql = "SELECT * FROM equipment WHERE name = ?";

        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { equipmentAlrady };
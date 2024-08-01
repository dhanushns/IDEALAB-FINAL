const db = require("../connection/connection");

const insertEquipment = (value, count, callback) => {

    try {
        const sql = `
        INSERT INTO equipment (name, count) VALUES (?, ?)
    `;

        db.query(sql, [value, count], (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { insertEquipment };
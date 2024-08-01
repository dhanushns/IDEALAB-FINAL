const db = require("../connection/connection");

const updateEquipment = (old, count, name, callback) => {

    try {
        const sql = `
        UPDATE equipment SET count = ? WHERE name = ?
    `;

        db.query(sql, [old + count, name], (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { updateEquipment }
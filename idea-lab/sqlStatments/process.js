const db = require("../connection/connection");

const process = (id, table, replay, callback) => {
    try {
        const sql = `
        UPDATE ${table} SET process = ? WHERE id = ?
    `;
        db.query(sql, [replay, id], (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        callback(err, null);
    }
}

module.exports = { process };
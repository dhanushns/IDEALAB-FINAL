const db = require("../connection/connection");

const adminLogin = (value, callback) => {
    try {
        const sql = `
        SELECT * FROM admin where username = ?
    `;
        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result)
        });
    } catch (err) {
        callback(err, null)
    }
}

module.exports = { adminLogin };
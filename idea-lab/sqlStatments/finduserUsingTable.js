const db = require("../connection/connection");

const findUserUsingTable = (email, table, callback) => {
    const sql = `
        SELECT * FROM ${table} WHERE email = ?
    `;
    db.query(sql, [email], (err, result) => {
        if (err) return callback(err, null);
        return callback(null, result[0]);
    });
}

module.exports = { findUserUsingTable }
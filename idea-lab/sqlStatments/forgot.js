const db = require("../connection/connection");

const forgot = (table, email, password, callback) => {
    const sql = `UPDATE ${table} SET password = ? WHERE email = ?`;
    
    db.query(sql, [password, email], (err, result) => {
        if (err) return callback(err, null);
        return callback(null, result);
    });
};

module.exports = { forgot };

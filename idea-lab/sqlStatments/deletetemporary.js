const db = require("../connection/connection");

const deletetemporary = (value, callback) => {

    try {
        const sql = `DELETE FROM temporary WHERE email = ?`;
        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, err);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { deletetemporary };
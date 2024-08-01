const db = require("../connection/connection");

const deleteOtp = (value, callback) => {
    try {

        const sql = `DELETE FROM otp WHERE email = ?`;

        db.query(sql, value, (err, result) => {
            if (err) callback(err, null);
            return callback(null, result)
        });
    } catch (err) {
        if (err) return callback(err, null)
    }
}

module.exports = { deleteOtp };
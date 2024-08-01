const db = require("../connection/connection");

const addAdmin = (value, callback) => {
    try {
        const sql = `
    INSERT INTO admin (username, password) values (?, ?);
`;
        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        callback(err, null)
    }
}

module.exports = { addAdmin };
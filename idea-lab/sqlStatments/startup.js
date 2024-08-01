const db = require("../connection/connection");

const startup = (value, callback) => {
    try {
        const sql = `
    INSERT INTO startup (
        email, phone, website, 
        name, street, city, 
        district, state, pincode,
        password
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;

        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { startup };
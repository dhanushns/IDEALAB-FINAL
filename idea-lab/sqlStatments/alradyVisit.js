const db = require("../connection/connection");

const alradyVisit = (value, callback) => {
    try {
        const sql = `
            SELECT * FROM visit WHERE 
            process = 'Approved' AND ((DateOfVisit <= ? AND exitVisit >= ?)
            OR (DateOfVisit <= ? AND exitVisit >= ?)
            OR (DateOfVisit >= ? AND exitVisit <= ?))
        `;
        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { alradyVisit };
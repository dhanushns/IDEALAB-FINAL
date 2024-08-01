const db = require("../connection/connection");

const visite = (values, callback) => {
    try {
        const sql = `
    INSERT INTO visit (
        email, DateOfVisit, purpose, 
        noOfVisitors, accommodation, numberOfDays,
        chickInTime, checkOutTime, exitVisit
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
`;
        db.query(sql, values, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result);
        });
    } catch (err) {
        callback(err, null)
    }
}

module.exports = { visite };

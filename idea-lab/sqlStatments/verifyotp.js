const db = require("../connection/connection");

const verifyotp = (req, res, next) => {
    try {

        const sql = `SELECT * FROM otp WHERE Email = ?`;

        // const sql = `ALTER TABLE hostInstituteFaculty MODIFY COLUMN DateofBirth VARCHAR(15)`;


        db.query(sql, req.body.email, (err, result) => {
            if (err) {
                if (err) return res.status(404).json({ error: true });
            } else {
                req.result = result;
                next();
            }
        });
    } catch (err) {
        if (err) return res.status(404).json({ error: true });
    }
}

module.exports = { verifyotp };
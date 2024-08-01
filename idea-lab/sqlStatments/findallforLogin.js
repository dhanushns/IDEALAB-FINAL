const db = require("../connection/connection");

const verifyPassword = async (req, res, next) => {
    const tables = [
        "hostinstitutefaculty",
        "hoststudent",
        "industry",
        "otherfaculty",
        "otherstudent",
        "schoolteacher",
        "schoolstudents",
        "startup",
        "alumini",
        "temporary",
    ];
    try {
        for (const tableName of tables) {
            const sql = `SELECT Password FROM ${tableName} WHERE Email = ?`;
            const result = await new Promise((resolve, reject) => {
                db.query(sql, req.body.email, (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
            });

            if (result.length > 0) {
                req.table = tableName;
                req.password = result[0].Password;
                break;
            }
        }

        next();
    } catch (error) {
        res.status(500).json({ error: true});
    }
};

module.exports = { verifyPassword };
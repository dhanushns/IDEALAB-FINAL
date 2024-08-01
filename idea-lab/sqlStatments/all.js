const db = require("../connection/connection");

const all = (callback) => {
    const tables = [
        "hostinstitutefaculty",
        "hoststudent",
        "temporary",
        "industry",
        "otherfaculty",
        "otherstudent",
        "schoolteacher",
        "schoolstudents",
        "startup",
        "alumini",
        "admin",
        "booking",
        "equipment",
        "fundrequest",
        "visit",
        "work"
    ];

    const promises = tables.map(table => {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ${table}`;
            db.query(sql, (err, ans) => {
                if (err) reject(err);
                else resolve({ [table]: ans });
            });
        });
    });

    Promise.all(promises)
        .then(results => {
            const result = results.reduce((acc, cur) => {
                return { ...acc, ...cur };
            }, {});
            callback(null, result);
        })
        .catch(error => {
            callback(error, null);
        });
};

module.exports = {all}
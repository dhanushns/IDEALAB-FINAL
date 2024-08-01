const db = require("../connection/connection");

const fundRequest = (value, callback) => {
    try {
        // const sql = `
        //     CREATE TABLE IF NOT EXISTS fundRequest (
        //         mentor varchar(50),
        //         title varchar(50),
        //         domain varchar(50),
        //         product varchar(50),
        //         patentable varchar(5),
        //         level varchar(50),
        //         rawmaterial varchar(150),
        //         problem varchar(250),
        //         solution varchar(250),
        //         uniqueness varchar(50),
        //         market varchar(50),
        //         cost int,
        //         fundRequest int,
        //         justification varchar(50),
        //         email varchar(50)
        //     )
        // `;

        const sql = `
    INSERT INTO fundRequest (
        mentor, title, domain, product, 
        patentable, level, problem, solution, 
        uniqueness, market, cost, fundRequest, justification, 
        email
        )

        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`;
        db.query(sql, value, (err, result) => {
            if (err) return callback(err, null);
            return callback(null, result)
        });
    } catch (err) {
        return callback(err, null)
    }
}

module.exports = { fundRequest }
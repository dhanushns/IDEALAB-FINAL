const db = require("../connection/connection");

const work = (value, callback) => {
    try{
            // const sql = `
    // CREATE TABLE IF NOT EXISTS work (
    //         work varchar(50),
    //         description varchar(150),
    //         quantity varchar(50),
    //         dateOfDevlivery varchar(50),
    //         rawMaterial varchar(50),
    //         email varchar(50)
    //     )
    // `;

    const sql = `
    INSERT INTO work (work, description, quantity, dateOfDelivery, rawMaterial, email) 
    VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, value, (err, result) =>{
        if (err) return callback(err, null);
        return callback(null, result);
    });
    }catch(err){
        return callback(err, null)
    }
}

module.exports = { work }
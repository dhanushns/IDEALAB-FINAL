const db = require("../connection/connection");

const selectTemporary = (req, res, next) =>{
    try{

        const sql = `
            SELECT * FROM temporary WHERE Email = ?
        `;

        db.query(sql, req.body.email, (err, result) =>{
            if (err) return res.status(404).json({ error: true });
            req.result = result;
            next();
        })

    }catch(err){
        if (err) return res.status(404).json({ error: true });
    }
}

module.exports = { selectTemporary };
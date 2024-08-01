const db = require("../connection/connection");

const verifyAlradyHaveAccount = (value) =>{
    try{

        const sql = `
            SELECT * FROM hostInstituteFaculty WHERE Email = ?
        `;

        db.query(sql, value, (err, result) =>{
            if (err) return res.status(404).json({ error: true });
            
            return result;
        })

    }catch(err){
        if (err) return res.status(404).json({ error: true });
    }
}

module.exports = { verifyAlradyHaveAccount };
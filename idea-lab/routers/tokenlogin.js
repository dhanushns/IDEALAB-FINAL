const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { tokenSelect } = require("../sqlStatments/tokenSelectTable");

router.post("/token", (req, res) => {
    const error = true;
    try {
        jwt.verify(req.body.token, process.env.KEY, (err, decode) => {
            if (err) return res.status(404).json({ error });
            tokenSelect(decode.email, decode.table, (err, value)=>{
                if (err) return res.status(404).json({error: true});
                return res.send({value});
            });
        });
    } catch (err) {
        if (err) return res.status(404).json({ error });
    }
});

module.exports = router;
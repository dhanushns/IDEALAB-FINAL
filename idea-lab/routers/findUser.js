const { verifyPassword } = require("../sqlStatments/findallforLogin");
const { findUserUsingTable } = require("../sqlStatments/finduserUsingTable");

const router = require("express").Router();

router.post("/findUser", verifyPassword, (req, res) => {
    try {
        if (req.table) {
            findUserUsingTable(req.body.email, req.table, (err, result) => {
                if (err) res.status(404).json({ error: true });
                result.table = req.table
                res.send({ result });
            });
        } else {
            res.status(404).json({ error: true });
        }
    } catch (err) {
        res.status(404).json({ error: true });
    }
});

module.exports = router;
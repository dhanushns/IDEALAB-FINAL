const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { verifyotp } = require("../sqlStatments/verifyotp");
const { verifyPassword } = require("../sqlStatments/findallforLogin");
const { forgot } = require('../sqlStatments/forgot');

router.post('/forgot', verifyotp, verifyPassword, async (req, res, next) => {
    try {
        jwt.verify(req.result[0].otp, process.env.KEY, async (err, decoded) => {
            if (err) return res.status(404).json({ error: true });
            if (req.body.otp == decoded.otp) {
                const salt = await bcrypt.genSalt(10);
                const password = await bcrypt.hash(req.body.password, salt);

                const payload = {
                    email: req.body.email,
                    table: req.table,
                };
                const key = process.env.KEY;
                const options = {
                    expiresIn: "7d",
                };
                const token = jwt.sign(payload, key, options);

                forgot(req.table, req.body.email, password, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    res.send({ verify: true, token: token });
                });
            } else {
                res.send({ verify: false });
            }
        });
    } catch (err) {
        return res.status(500).json({ error: true, message: err.message });
    }
});

module.exports = router;

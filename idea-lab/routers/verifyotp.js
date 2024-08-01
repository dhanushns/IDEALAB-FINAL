const { temporary } = require("../sqlStatments/temporary");
const { verifyotp } = require("../sqlStatments/verifyotp");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


router.post("/verifyOtp", verifyotp, (req, res, next) => {
    try {
        jwt.verify(req.result[0].otp, process.env.KEY, async (err, decoded) => {
            if (err) return res.status(404).json({ error: true });
            if (req.body.otp == decoded.otp) {

                const salt = await bcrypt.genSalt(2);
                const password = await bcrypt.hash(req.body.password, salt);

                const paylode = {
                    email: req.body.email,
                    table: "temporary",
                }
                const key = process.env.KEY;
                const options = {
                    expiresIn: "7d",
                }

                const token = jwt.sign(paylode, key, options);

                req.value = [req.body.email, password]

                res.send({ verify: true, token: token });
                next();
            } else {
                res.send({ verify: false });
                return;
            }
        });
    } catch (err) {
        if (err) return res.status(404).json({ error: true });
    }
}, temporary);

module.exports = router;
const router = require("express").Router();
const { adminLogin } = require("../sqlStatments/adminLogin");
const bcrypt = require("bcrypt");
const { all } = require("../sqlStatments/all");
const { process } = require("../sqlStatments/process");
const jwt = require("jsonwebtoken");

router.post("/admin", async (req, res) => {
    try {
        switch (req.body.work) {
            case 'login':
                adminLogin(req.body.username, async (err, result) => {
                    if (result.length === 0){
                        result = [
                            {
                                username: 'notfound',
                                password : 'dsaf'
                            },
                        ]
                    }
                    if (err) return res.status(404).json({ error: true });
                    const verify = await bcrypt.compare(req.body.password, result[0].password);
                    if (verify) {

                        const payload = {
                            user: 'admin'
                        }
                        const key = "idealab";
                        const options = {
                            expiresIn: "7d",
                        }

                        const token = jwt.sign(payload, key, options);
                        res.send({ token })
                    } else {
                        res.send({ error: true });
                    }
                });
                break;

            case 'token':
                jwt.verify(req.body.token, "idealab", (err, decode) => {
                    if (err) return res.status(404).json({ error: true });
                    if (decode.user === 'admin') {
                        all((err, value) => {
                            if (err) return res.status(404).json({ error: true });
                            res.send({ value: value });
                        });
                    }
                });
                break;

            case 'process':
                process(req.body.id, req.body.table, req.body.status, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    res.send({ error: false });
                });
                break;
            default:
                res.send({ error: true });
        }
    } catch (err) {
        res.status(404).json({ error: true });
    }
});

module.exports = router
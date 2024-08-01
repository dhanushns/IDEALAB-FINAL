const { selectTemporary } = require("../sqlStatments/selectTemporary");
const { sendOtp } = require("../sendOtp");
const { verifyPassword } = require("../sqlStatments/findallforLogin");

const router = require("express").Router();

router.post("/temporary", selectTemporary, async (req, res, next) => {
    try {
        const generated = false;
        const alrady = false;
        if(req.result.length === 0 ){
            next();
            generated = true;
        }else{
            alrady =  true;
        }

        res.send({generated, alrady});

    } catch (err) {
        if (err) return res.status(404).json({error: true});
    }
}, sendOtp);


module.exports = router;
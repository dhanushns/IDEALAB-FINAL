const { compose } = require("./mail/compose");
const { otptable } = require("./sqlStatments/otptable");
const jwt = require("jsonwebtoken");

const randomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const sendOtp = (req, res, next) => {
    try {
        console.log("send otp");
        const otp = randomValue(1000, 9999);
        const subject = "Verification code";
        const text = `Please use the verification code below to sign in.\n\n ${otp}\n\nIf you didn't request this, you can ignore this email.\nThanks,\nThe Idea lab team`;
        const to = req.body.email;

        compose(to, subject, text);

        const paylode = {
            otp
        }

        const key = 'idealab'

        const options = {
            expiresIn: "3m",
        }

        const otpCode = jwt.sign(paylode, key, options);

        console.log(otp);
        otptable(to, otpCode);


    } catch (err) {
        if(err) return res.status(404).json({error: true});
    }
}

module.exports = { sendOtp }
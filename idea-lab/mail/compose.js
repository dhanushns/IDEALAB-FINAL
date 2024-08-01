const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
        user: process.env.MAILUSER,
        pass: process.env.AUTHPASS,
    }
});

// const sender = nodemailer.createTransport({
//     service: process.env.SERVICE,
//     auth: {
//         user: process.env.AUTHUSER,
//         pass: process.env.AUTHPASS,
//     }
// });


const compose = (to, subject, text) => {
    composeInformation = {
        from: process.env.FROM,
        to,
        subject,
        text,
    };

    sender.sendMail(composeInformation, (err, info) => {
        if (err) {
            console.log(err)
        }
    });
};

module.exports = { compose }
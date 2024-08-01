const { compose } = require("../mail/compose");
const { fundRequest } = require("../sqlStatments/fundRequest");

const router = require("express").Router();

router.post("/fundRequest", (req, res) => {
    try {
        const mentorMail = () => {
            const to = req.body.mentor;
            const subject = `Mentor Conformation for ${req.body.title} project`;
            const text = `
                You are selected as Mentor for an project name is ${req.body.title}
                and its in the domain of ${req.body.domain}
                other we can discus with the student and idea lab
            `;

            compose(to, subject, text);
            studentConform();
        }

        const studentConform = () => {
            const to = req.body.email;
            const subject = `Request Verifucation`;
            const text = `
                You Have Ruquested fund for the project of ${req.body.title}
                and that project in the domain is ${req.body.domain} and also
                your mentor is ${req.body.mentor} your request is ${req.body.cost}
                we have discus and conform your request
    
            `;
            compose(to, subject, text);
        }

        const value = [
            req.body.Email,
            req.body.Title,
            req.body.Domain,
            req.body.Category,
            req.body.Patentable,
            req.body.Level,
            req.body.ProblemStatement,
            req.body.ProposedSolution,
            req.body.Uniqueness,
            req.body.MarketPotential,
            req.body.TotalProjectCost,
            req.body.SeedFunRequested,
            req.body.Justification,
            req.body.studentEmail
        ];


        fundRequest(value, (err, result) => {
            if (err) return res.status(404).json({ error: true });
            // mentorMail()
            return res.send({ error: false });
        });
    } catch (err) {
        res.status(404).json({ error: true });
    }
});

module.exports = router;
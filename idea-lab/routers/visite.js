const { end } = require("../connection/connection");
const { alradyVisit } = require("../sqlStatments/alradyVisit");
const { visite } = require("../sqlStatments/visite");
const router = require("express").Router();

router.post("/visite", (req, res) => {
    try {

        const startTime = `${req.body.DateofVisit.slice(0, 10)}T${req.body.InTime}:00`;
        const endTime = `${req.body.ExitofVisit.slice(0, 10 )}T${req.body.ExitTime}:00`;

        const value = [
            req.body.email,
            startTime,
            req.body.Purpose,
            req.body.Visitors,
            req.body.Accommodation,
            req.body.NoOfDays,
            req.body.inTime,
            req.body.outTime,
            endTime,
        ];

        alradyVisit([startTime, endTime, startTime, endTime, startTime, endTime], (err, result) => {
            if (err) return res.status(404).json({ error: true });

            if (result.length === 0) {
                visite(value, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                });
            }
        });
    } catch (err) {
        res.status(404).json({ error: true })
    }
});

module.exports = router;
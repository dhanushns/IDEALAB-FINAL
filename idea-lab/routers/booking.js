const bodyParser = require("body-parser");
const { booking } = require("../sqlStatments/booking");
const { AlradyBooked } = require("../sqlStatments/AlradyBooked");

const router = require("express").Router();

router.post("/booking", (req, res) => {
    try {
        const startTime = req.body.Reservationdate;
        const endTime = req.body.Endtime;

        var raw = 'NO';

        if (req.body.RawMaterialRequirement === 'Yes') {
            raw = req.body.RawMaterial
        }

        const value = [
            req.body.email,
            req.body.Equipments,
            req.body.Purpose,
            startTime,
            endTime,
            raw
        ];

        AlradyBooked([req.body.Equipments, startTime, endTime, startTime, endTime, startTime, endTime], (err, result) => {
            if (err) throw err;

            if (result.length === 0) {
                booking(value, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                });
            }
        });
    } catch (err) {
        res.status(404).json({ error: true });
    }
});

module.exports = router;
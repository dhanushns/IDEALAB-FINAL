const { equipmentAlrady } = require("../sqlStatments/equipment");
const { insertEquipment } = require("../sqlStatments/insertEquipment");
const { updateEquipment } = require("../sqlStatments/updateEquipment");

const router = require("express").Router();

router.post("/equipment", (req, res) => {

    try {
        equipmentAlrady(req.body.equipmentName, (err, result) => {
            if (err) return res.status(404).json({ error: true });
            if (result.length > 0) {
                updateEquipment(result[0].count, req.body.count, req.body.equipmentName, (err, upresult) => {
                    if (err) return res.status(404).json({ error: true });
                    res.send({ error: false });
                });
            } else {
                insertEquipment(req.body.equipmentName, req.body.count, (err, inresult) => {
                    if (err) return res.status(404).json({ error: true });
                    return res.send({ error: false });
                });
            }
        });
    } catch (err) {
        res.status(404).json({ error: true });
    }

});

module.exports = router
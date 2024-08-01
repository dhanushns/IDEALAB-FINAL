const { compose } = require("../mail/compose");
const { work } = require("../sqlStatments/work");

const router = require("express").Router();

router.post("/work", (req, res) => {
    try {

        const forUser = () => {
            const subject = "Confirmation of Your Recent Order";

            const text = `
            Dear ${req.body.name},\n\n

            We hope this email finds you well. We're writing to confirm that we have received your recent order and to provide you with some additional details.\n\n

            order Details: \n\n

            Date of Order: ${Date}\n
            Items ordered: ${req.body.work}\n
            Quantity     : ${req.body.quantity}\n
            Total Amount : ${1000}\n\n

            Estimated Delivery Date: ${req.body.deliveryDate}\n\n

            If you have any questions or concerns regarding your order, please don't hesitate to reach out to our customer service team at [Customer Service Email/Phone Number]. We're here to assist you throughout the process.\n\n

            We sincerely appreciate your business and trust in our products/services. Thank you for choosing KSRCT IDEA LAB.\n\n

            Best regards,\n\n

            Gowtham\n
            Head of Idea lab\n
            Idea lab\n
            9876543210
        `;

            const to = req.body.email;

            compose(to, subject, text);

        }

        const forIncharge = () => {

            const subject = "Notification of Customer Order";

            const text = `
                Dear Praveen Kumar V,\n\n

                I hope this message finds you well.\n\n

                I'm writing to inform you about a recent customer order that we've received. The details are as follows:\n\n


                Date of Order: ${Date}\n
                Items ordered: ${req.body.work}\n
                Quantity     : ${req.body.quantity}\n
                Description  : ${req.body.description}\n
                Raw Meterial : ${req.body.rawmeterial}\n
                Total Amount : ${1000}\n\n

                Estimated Delivery Date: ${req.body.deliveryDate}\n\n

                We're pleased to have received this order and are working diligently to fulfill it in a timely manner. Our team is committed to ensuring a seamless experience for our customers throughout the entire process.\n\n

                If you have any questions or require further information regarding this order, please feel free to contact me directly.\n\n

                Thank you for your attention to this matter.

            `;

            const to = 'gowthammoorthy13@gmail.com';

            compose(to, subject, text);

        }

        // forUser();
        // forIncharge();
        var rawmeterial = req.body.RawMaterialRequirement

        if(req.body.RawMaterialRequirement === 'Yes'){
            rawmeterial = req.body.RawMaterial;
        }

        const value = [
            req.body.JobWork, 
            req.body.JobWorkDescription, 
            req.body.Quantity, 
            req.body.ExpectedDate,
            rawmeterial,
            req.body.email,
        ];

        work(value, (err, result) => {
            if (err) return res.status(404).json({error: true});
            return res.send({error: false});
        });

    } catch (err) {
        if (err) return res.status(404).json({error: true});
    }
});

module.exports = router;
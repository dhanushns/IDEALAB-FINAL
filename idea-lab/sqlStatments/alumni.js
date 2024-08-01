const db = require("../connection/connection");

const alumini = (values, callback) => {
    try {
        const email = values[0];

        const selectSQL = `
            SELECT COUNT(*) AS count FROM alumini WHERE email = ?
        `;

        db.query(selectSQL, [email], (err, result) => {
            if (err) return callback(err, null);

            const count = result[0].count;
            if (count > 0) {
                return callback(null, "Record already exists");
            }

            const insertSQL = `
                INSERT INTO alumini(email, name, dob, yearOfPassing,
                    phone, address, programme, 
                    course, InstituteName, password
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            db.query(insertSQL, values, (err, result) => {
                if (err) return callback(err, null);
                return callback(null, result);
            });
        });
    } catch (err) {
        return callback(err, null);
    }
};

module.exports = { alumini };

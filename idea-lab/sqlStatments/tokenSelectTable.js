const db = require("../connection/connection");

const tokenSelect = async (email, table, callback) => {
    const sql = `
        SELECT * FROM ${table} WHERE Email = ?
    `;

    const booking = `
        SELECT * FROM booking WHERE email = ?
    `;

    const work = `
        SELECT * FROM work WHERE email = ?
    `;

    const fund = `
        SELECT * FROM fundRequest WHERE email = ?
    `;

    const mentor = `
    SELECT * FROM hostInstituteFaculty WHERE Email IN (SELECT mentor FROM fundRequest WHERE email = ?);
    `;

    var r = `
    select * from visit where email = ?
    `;

    const bookingsql = `
        SELECT equipment, inTime, outTime from booking WHERE process = 'Approved'
    `;

    const visitsql = `
        SELECT DateOfVisit, exitVisit FROM visit WHERE process = 'Approved'
    `;

    try {
        const userInformation = await sqlQuery(sql, email);
        const bookingResult = await sqlQuery(booking, email);
        const workResult = await sqlQuery(work, email);
        const fundResult = await sqlQuery(fund, email);
        var mentorResult = await sqlQuery(mentor, email);
        const visit = await sqlQuery(r, email);
        const bookingDate = await sqlQuery(bookingsql, '')
        const visitDate = await sqlQuery(visitsql, '');

        let bookingDateVal = {};
        let visitDateVal = []


        function findDate(start, end, l){
            let currentDate = new Date(start);
            let endDate = new Date(end);

            while (currentDate <= endDate){
                l.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
        }
        
        function findDateBooking(start, end, equipment, l){
            let currentDate = new Date(start);
            let endDate = new Date(end);

            if(l[equipment]){
                while (currentDate <= endDate){
                    l[equipment].push(new Date(currentDate));
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }else{
                l[equipment] = [];
                while (currentDate <= endDate){
                    l[equipment].push(new Date(currentDate));
                    currentDate.setDate(currentDate.getDate() + 1);
                }
            }
        }

        visitDate.forEach(item => {
            findDate(item.DateOfVisit.slice(0, 10), item.exitVisit.slice(0, 10), visitDateVal);
        });

        bookingDate.forEach(item => {
            findDateBooking(item.inTime.slice(0, 10), item.outTime.slice(0, 10), item.equipment, bookingDateVal);
        });

        const value = {
            userInformation: userInformation[0],
            booking: bookingResult,
            work: workResult,
            mentor: mentorResult,
            fund: fundResult,
            visit: visit,
            bookingDateVal,
            visitDateVal,
        }
        value.userInformation.table = table;
        
        return callback(null, value);

    } catch (error) {
        return callback(error, null)
    }
}

function sqlQuery(sql, email) {
    return new Promise((resolve, reject) => {
        db.query(sql, email, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

module.exports = { tokenSelect };
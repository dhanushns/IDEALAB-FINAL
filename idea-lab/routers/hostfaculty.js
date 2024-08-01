const router = require("express").Router();
const bodyParser = require("body-parser");
const { alumini } = require("../sqlStatments/alumni");
const { deletetemporary } = require("../sqlStatments/deletetemporary");
const { user } = require("../sqlStatments/hostInstituteFaculty");
const { hostStudent } = require("../sqlStatments/hostStudend");
const { industry } = require("../sqlStatments/industry");
const { otherFaculty } = require("../sqlStatments/otherFaculty");
const { otherStudent } = require("../sqlStatments/otherStudent");
const { schoolStudents } = require("../sqlStatments/schoolStudents");
const { schoolTeacher } = require("../sqlStatments/schoolTeacher");
const { selectTemporary } = require("../sqlStatments/selectTemporary");
const { startup } = require("../sqlStatments/startup");

router.post("/update", selectTemporary, (req, res) => {
    try {
        var error = false
        const hostfaculty = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.FacultyName || '',
                    req.body.Designation || '',
                    req.body.Department || '',
                    req.body.FacultyID || '',
                    req.body.DateofBirth || '',
                    req.body.phonenumber || '',
                    'no token',
                    req.result[0].password
                ];
                user(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const hostStudentfun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.Name,
                    req.body.phonenumber,
                    req.body.programme,
                    req.body.registerno,
                    req.body.semester,
                    req.body.yearofgraduate,
                    req.body.yearofstudy,
                    req.result[0].password,
                    req.body.DateofBirth,
                    req.body.course.value,
                ];
                hostStudent(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const alumnifum = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.AluminiName,
                    req.body.DateofBirth,
                    req.body.yearofpassing,
                    req.body.phonenumber,
                    req.body.Address,
                    req.body.programme,
                    req.body.course.value,
                    req.body.InstituteName,
                    req.result[0].password,
                ];
                alumini(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const otherStudentFun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.StudentName,
                    req.body.DateofBirth,
                    req.body.phonenumber,
                    req.body.Address,
                    req.body.StudentID,
                    req.body.programme,
                    req.body.course.value,
                    req.body.semester,
                    req.body.yearofstudy,
                    req.body.yearofgraduate,
                    req.result[0].password
                ];
                otherStudent(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const otherFacultyfun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.FacultyName,
                    req.body.DateofBirth,
                    req.body.phonenumber,
                    req.body.FacultyID,
                    req.body.Designation,
                    req.body.Department,
                    req.body.InstituteType,
                    req.body.InstituteName,
                    req.body.AISHECode,
                    req.result[0].password
                ];
                otherFaculty(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const startupfun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.phonenumber,
                    req.body.website,
                    req.body.IndustryName,
                    req.body.StreetName,
                    req.body.City,
                    req.body.District,
                    req.body.State,
                    req.body.Pincode,
                    req.result[0].password
                ];
                startup(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const schoolStudentsfun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.StudentName,
                    req.body.DateofBirth,
                    req.body.phonenumber,
                    req.body.Address,
                    req.body.StudentID,
                    req.body.SchoolName,
                    req.body.UDISECode,
                    req.result[0].password
                ];
                schoolStudents(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const schoolTeacherfun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.TeacherName,
                    req.body.DateofBirth,
                    req.body.phonenumber,
                    req.body.Address,
                    req.body.TeacherID,
                    req.body.InstituteName,
                    req.body.UDISECode,
                    req.result[0].password
                ];
                schoolTeacher(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        const industryFun = () => {
            if (req.result.length >= 1) {
                values = [
                    req.result[0].email,
                    req.body.IndustryName,
                    req.body.GSTNumber,
                    req.body.phonenumber,
                    req.body.Website,
                    req.body.StreetName,
                    req.body.City,
                    req.body.District,
                    req.body.State,
                    req.body.Pincode,
                    req.result[0].password
                ];
                industry(values, (err, result) => {
                    if (err) return res.status(404).json({ error: true });
                    error = true;
                });
            }
        }

        var values = [];

        switch (req.body.who) {
            case "hostFaculty":
                hostfaculty()
                break;
            case "hoststudent":
                hostStudentfun();
                break;
            case "alumini":
                alumnifum();
                break;
            case "otherStudent":
                otherStudentFun();
                break;
            case "otherFaculty":
                otherFacultyfun();
                break;
            case "entrepreneurs":
                startupfun();
                break;
            case "schoolStudent":
                schoolStudentsfun();
                break;
            case "schoolTeacher":
                schoolTeacherfun();
                break;
            case "industry":
                industryFun();
                break;
            default:
                res.status(404).json({ error: true })
        }
        if (error) {
            deletetemporary(req.body.email, (err, result) => {
                if (err) return res.status(404).json({ error: true });
                res.send({ update: true });
            });
        }

    } catch (err) {
        if (err) return res.status(404).json({ error: true });
    }
});

module.exports = router;
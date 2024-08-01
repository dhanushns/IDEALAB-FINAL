const express = require("express");
const env = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

env.config()


app.use(require("./routers/temporary"));
app.use(require("./routers/verifyotp"));

app.use(require("./routers/hostfaculty"));

//login
app.use(require("./routers/login"));
app.use(require("./routers/tokenlogin"));

//work
app.use(require("./routers/work"));

//fund request
app.use(require("./routers/fundRequest"));

//equipment add
app.use(require("./routers/equipment"));

//booking
app.use(require("./routers/booking"));

// visite
app.use(require("./routers/visite"));

//admin
app.use(require("./routers/admin"));

//forgot
app.use(require("./routers/forgot"));

app.use(require("./routers/forgototp"))

app.use(require("./routers/findUser"));

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log("running in port ", port);
});
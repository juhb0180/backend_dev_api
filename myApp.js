let express = require('express');
let app = express();

let absolutePath = __dirname + "/"

app.get("/", function (req, res) {
    console.log("Hello Express");
    res.send("Hello Express");
    res.sendFile(__dirname +"/views/index.html"
});








console.log("Hello Express");























module.exports = app;

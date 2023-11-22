let express = require('express');
let app = express();

app.get("/", function (req, res) {
    console.log("Hello Express");
    //res.send("Hello Express");
    res.sendFile(__dirname +"/views/index.html");
});

app.use("/public", express.static(__dirname +"/public/style.css"));


console.log("Hello Express");























module.exports = app;

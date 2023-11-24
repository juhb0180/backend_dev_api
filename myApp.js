require('dotenv').config();

let express = require('express');
let app = express();

app.get("/", function (req, res) {
    console.log("Hello Express");
    //res.send("Hello Express");
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
    console.log("Hello Express");
    //res.send("Hello Express");

    if (process.env.MESSAGE_STYLE==="uppercase") {
        cad = "Hello Json".toUpperCase();        
    } else {
        cad = "Hello Json"; 
    }

    res.json({ "message": cad });

});



console.log("Hello Express");























module.exports = app;

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

    console.log(process.env.MESSAGE_STYLE);
    

    if (process.env.MESSAGE_STYLE==="uppercase") {
        cad = "Hello Json".toUpperCase();        
        console.log(cad);
    } else {
        cad = "Hello json"; 
        console.log(cad);
    }

    res.json({ "message": cad });

});



console.log("Hello Express");























module.exports = app;

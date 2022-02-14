var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Hello, World");
});


app.get("/hi", (req, res) => {
    res.send("Hi, World");
});

app.post("/", (req, res) => {
    res.send("POST, World");
});

app.use('/test', express.static('contents'));



app.listen(3000);
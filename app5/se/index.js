const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.get("/",(req,res)=>{
    res.send( `working on port ${port}`)
})

//app.use("/", )

app.listen(port)
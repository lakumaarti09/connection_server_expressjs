const express = require('express');

const app = express();

app.get("/",(req,res)=>{

    res.send("hello from express");
});

app.listen(8000,()=>{
    console.log("app listining port 8000");
});
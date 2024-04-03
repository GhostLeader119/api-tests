const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Caden's backend application")
});

app.get("/caden",(req,res)=>{
    res.send("Hello Caden!")
});

app.listen(3000,()=>{
    console.log("Listening...")
})
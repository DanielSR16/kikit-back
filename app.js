const express = require("express");
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config();


const app =  express();
app.use(bodyParser.json())
app.use(morgan('combined'))

//routers
const ageb = require('./src/routers/ageb_router')
app.use('/ageb',ageb)


app.use('/',(req,res)=>{
    res.send("Api")
})


app.listen(3001,()=>{
    console.log('Servidor corriendo')   
});
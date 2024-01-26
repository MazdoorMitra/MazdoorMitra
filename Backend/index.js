const express=require('express');
const { mongoose } = require('mongoose');


const app=express();

const db_link="mongodb+srv://<username>:<password>@cluster0.wqnula8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db_link)
.then(function (db){
    console.log("db Connected")

})
.catch(function(err){
    console.log(err)
})

app.listen(3000)

app.get('/',(req,res)=>{
    res.send('<h1>Hello <h1>')
})
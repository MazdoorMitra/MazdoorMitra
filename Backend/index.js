const express=require('express');
const { mongoose } = require('mongoose');
const userRouter = require('./routes/contractorRoutes');
const cors=require('cors')



const app=express();
const db_link="mongodb+srv://vinayakrajqaz:iQkUnxrdkVaUsDQS@cluster0.wqnula8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db_link)
.then(function (db){
    console.log("db Connected")

})
.catch(function(err){
    console.log(err)
})

//Middleware
app.use(express.json());
app.use(cors());
app.use("/contractor",userRouter);



app.get('/',(req,res)=>{
    res.send('<h1>Hello <h1>')
})
app.listen(4000)
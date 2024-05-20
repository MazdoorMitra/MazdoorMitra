const express=require('express');
const { mongoose } = require('mongoose');
const userRouter = require('./routes/contractorRoutes');

const cors=require('cors')
const authRoutes = require('./routes/authRoutes');
const labourRoutes = require('./routes/labourRoutes');


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

app.use('/profile', labourRoutes);
app.use("/contractor",userRouter);
app.use('/api/auth', authRoutes);
app.use('/api/labour', labourRoutes);

app.get('/',(req,res)=>{
    res.send('<h1>Hello <h1>')
})

app.listen(4000)
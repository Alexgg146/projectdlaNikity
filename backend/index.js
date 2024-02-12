const nodemailer =require('nodemailer')
const mongoose = require('mongoose');
const userRouter = require('./router/user.router.js')
const express = require('express')
const cors=require('cors');
const app = express()
const port = process.env.port || 3001
app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/kontrakt', { useNewUrlParser: true, useUnifiedTopology: false });
app.use('/users',userRouter)
app.listen(port, () => {
    console.log(`Server good! http://localhost:${port}`)
})
const express = require('express');
import mongoose from "mongoose";
import postRouter from "./routing/post-router";
import userRouter from "./routing/user-router";
import cors from 'cors';

require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/posts",postRouter);




mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.3fe6osh.mongodb.net/?retryWrites=true&w=majority`
).then(()=>
    app.listen(5000,()=>console.log("Listening"))
).catch((err)=>console.log(err));




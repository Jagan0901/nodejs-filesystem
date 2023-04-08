import express from 'express';
import { fsRouter } from './Routes/fs.js';

const app = express();

const PORT =8000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello Everyone")
})

app.use("/FileSystem", fsRouter); 

//Deployment URL  : https://nodejs-filesystem-one.vercel.app/

//API endpoints : 
// For Create   : FileSystem/create
// For Retrieve : FileSystem/get

app.listen(PORT,()=>console.log('Server Started on PORT',PORT))
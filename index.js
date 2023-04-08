import express from 'express';
import { fsRouter } from './Routes/fs.js';

const app = express();

const PORT =8000;

app.use(express.json());

app.use("/FileSystem", fsRouter); 

//API endpoints : 
// For Create   : FileSystem/create
// For Retrieve : FileSystem/get

app.listen(PORT,()=>console.log('Server Started on PORT',PORT))
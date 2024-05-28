import express from "express";
import fs from 'fs';
import { format } from "date-fns";
import path  from "path";
const app = express();

const PORT =4000;


app.use(express.json())


app.get('/',(req,res)=>{
    res.send("change the end point to see the required results")
})
app.listen(PORT,()=>{
    console.log(`app port = ${PORT}`)
});

app.get('/write',(req,res)=>{
    let dateTime = format(new Date(),'dd-mm-yyyy-HH-mm-ss')
    const filepath = `Timestamp/${dateTime}.txt`
    fs.writeFileSync(filepath,`${dateTime}`,"utf-8")
    res.status(200).send("File created successfully with the current date and time ")
   
})


app.get('/read',(req,res)=>{
    
let folderpath = '\Timestamp'
let folder = path.basename(folderpath)
    let files = fs.readdirSync(folder);
    res.status(200).send(files)
   
})
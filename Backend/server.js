import express from 'express'
import cors from 'cors'
import connectdb from './config/db.js';


const app=express();
const port=4000;

app.use(express.json())
app.use(cors());


connectdb();

app.get('/',(req,res)=>{
res.send("Api working");
});


app.listen(port,()=>{
    console.log(`server is runnig on http://localhost:${port}`);
    
})



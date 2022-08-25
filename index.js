const express=require('express');
const mongocurd=require('./mongoCURD')
const cors = require('cors');

let port=process.env.PORT || 80;

mongocurd.setDatabaseColletion('notes_taker','pratik')

const app=express();

app.use(express.json());

app.use(cors({
    origin: "*",
    "Access-Control-Allow-Origin": "*"
  }));

app.get("/",async (req,res)=>{
    let data=await mongocurd.read()
    res.send(data);
})

app.post("/", async (req,res)=>{
    let resp= await mongocurd.insert(req.body);
    res.send(resp);
});


app.listen(port);
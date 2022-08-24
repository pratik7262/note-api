const express=require('express');
const mongocurd=require('./mongoCURD')
const mongodb=require('mongodb');
let port=process.env.PORT || 300;

mongocurd.setDatabaseColletion('students','tenthGrade')

const app=express();

app.use(express.json())

app.get("/",async (req,res)=>{
    let data=await mongocurd.read()
    res.send(data);
})

app.post("/", async (req,res)=>{
    let resp= await mongocurd.insert(req.body);
    res.send(resp);
})

app.put('/:name',async (req,res)=>{
    let resp=await mongocurd.update({Name:req.params.name},req.body);
    res.send(resp);
})

app.delete("/:id",async (req,res)=>{
    let resp=await mongocurd.delete({_id: new mongodb.ObjectId(req.params.id)});
    res.send(resp);
})

app.listen(port);
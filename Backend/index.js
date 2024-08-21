const express = require("express");
const cors=require("cors")
const { CreateTodo, UpdateTodo } = require("./types");
const { todo } = require("./database");
const app= express();
const PORT=3000;

app.use(express.json())

app.use(cors())

app.post('/add/todo',async function(req,res){
    const createPayload=req.body;
    const parsePayload= CreateTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"sent wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg:"todo created"
    })
})
app.get('/todos',async function(req,res){
    const todos=await todo.find({});
    res.json({
        todos
    })
})
app.put('/completed',async function(req,res){
    const updatePayload =req.body;
    const parsedPayload=UpdateTodo.safeParse(updatePayload);
    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg:"you sent wrong input"
        })
        return;
    }
    await todo.updateOne(
        { _id: req.body.id },
        { $set: { complete: true } } 
      );

    res.json({
        msg:"to marked as complete"
    })
    
})
app.listen(PORT,()=>{
    console.log(`Litsening to port ${PORT}`)
})
const express = require("express");
const { CreateTodo, UpdateTodo } = require("./types");
const app= express();
const PORT=3000;

app.use(express.json())

app.post('/add/todo',function(req,res){

})
app.get('/todos',function(req,res){
    const createPayload=req.body;
    const parsePayload= CreateTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"sent wrong inputs"
        })
        return;
    }
    

})
app.put('/completed',function(req,res){
    const updatePayload =req.body;
    const parsedPayload=UpdateTodo.safeParse(updatePayload);
    if(!parsedPayload.success)
    {
        res.status(411).json({
            msg:"you sent wrong input"
        })
        return;
    }
    
})
app.listen(PORT,()=>{
    console.log(`Litsening to port ${PORT}`)
})
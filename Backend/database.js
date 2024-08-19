const mongoose=require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://admin:QBnMQHxIN8ruZgZI@cluster0.4k28i.mongodb.net/todo_App")

const todoSchema =mongoose.Schema({
    title: String,
    description: String,
    complete: Boolean
})

const todo =mongoose.model('Todos',todoSchema);

module.exports={
   todo
}
import { useState } from "react"

export function CreateTodo(){
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("")
    return <div>
        <input type="text" placeholder="Title" onChange={(e)=>{
            setTitle(e.target.value)
        }}/> <br /> <br />
        <input type="text" placeholder="Description" onChange={(e)=>{
            setDescription(e.target.value)
        }} /> <br /> <br />
        <button onClick={()=>{
            fetch("http://localhost:3000/add/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            }).then(async function(res){
                const addtodo=await res.json();
                alert("Todo added")
            })
        }}>Add a todo</button>
    </div>
}
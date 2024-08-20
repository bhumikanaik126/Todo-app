import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/todos'

function App() {
   const [todos,setTodos]=useState([])
   fetch("http://localhost:3000/todos").then(async (res)=>{
    const todolist=await res.json();
    setTodos(todolist.todos)
   })
  return (
      <div>
        <CreateTodo/>
        <Todos todos={todos}></Todos>
      </div>
  )
}

export default App

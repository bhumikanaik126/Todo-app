export function Todos({todos}){
    return <div>
       {
        todos.map((todo)=>{
           return <div>
            <h2>{todo.title}</h2>
           <h2>{todo.description}</h2>
           <button>{todo.complete==true?"Done":"Mark as complete"}</button> 
           </div> 
        })
       }
    </div>
}
import React,{useEffect, useState} from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const [todo, setTodo] = useState('')
  const[ tasks, setTask]= useState([{id:1,task:'HElo'}])
  const [editItem, setEditItem]= useState(null)



  const editTask=(id,task)=>{
    const newTask = tasks.map(item=>item.id===id ? {id,task} : item)
    setTask(newTask)
  }

  
const addTask=(todo)=>{
  if(editItem===null){
  if(todo!==''){
setTask([...tasks,{id:Math.random(), task:todo}])
setTodo("")
  }
  else{
    alert("withOut name")
  }}
  else{
    editTask(editItem.id, todo)
    setTodo("")
    setEditItem(null)
  }

  
}
const clearTask=()=>{
  setTask([])
}
const deleteTask=(id)=>{
  alert(id)
  setTask([...tasks.filter(item=>item.id!==id)])
}
console.log(tasks)

const findItem=(id)=>{
  alert(id)
  setEditItem(tasks.find(item=>item.id===id))
}


useEffect(() => {
  if(editItem!==null){
    console.log(editItem.task)
    setTodo(editItem.task)
  }
  else{
    setTodo("")
  }
}, [editItem])
  return (
    <div className="App">
     <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
     <button onClick={()=>addTask(todo)}> {editItem ===null ? 'ADD' : 'UPDATE'}</button>
     <button onClick={()=>clearTask()}>CLEAR</button>

    {tasks.map(item=>(
      <div>
      <h1>{item.task}</h1>
      <button onClick={()=>deleteTask(item.id)}>Del</button>
      <button onClick={()=>findItem(item.id)}>find</button>
      </div>
    ))}
    </div>
  );
}

export default App;

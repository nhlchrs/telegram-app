import React,{useEffect, useState} from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  const intialState= JSON.parse(localStorage.getItem("tasks"))||[];
  const [todo, setTodo] = useState('')
  const[ tasks, setTask]= useState(intialState)
  const [editItem, setEditItem]= useState(null)

const editTask =(id,task)=>{
  const newTask = tasks.map(item=>item.id===id ? {id,task} : item)
  setTask(newTask)
}

useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks])
const addTask=(todo)=>{
  if(editItem===null){
setTask([...tasks,{id:Math.random(), task:todo}])
setTodo("")  
  }
  else{
    editTask(editItem.id, todo )
    console.log(editItem.id)
    setTodo("")
    setEditItem(null)
  }
}
useEffect(()=>{
  if(editItem!==null){
    setTodo(editItem.task)
  }
  else{
    setTodo("")
  }
},[editItem]
)
const clearTask=()=>{
  setTask([])
}
const deleteTask=(id)=>{
  alert(id)
  setTask([...tasks.filter(item=>item.id!==id)])
}

const findItem=(id)=>{
  setEditItem(tasks.find(item=>item.id===id))
}

  return (
    <div className="App">
     <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
     <button onClick={()=>addTask(todo)}> {editItem ===null ? 'ADD' : 'UPDATE'}</button>
     <button onClick={()=>clearTask()}>CLEAR</button>

    {tasks.map((item,index)=>(
      <div key={index}>
      <h1>{item.task}</h1>
      <button onClick={()=>deleteTask(item.id)}>Del</button>
      <button onClick={()=>findItem(item.id)}>find</button>
      </div>
    ))}
    </div>
  );
}

export default App;

import "./styles.css"; 
import React, { useState } from "react";
export default function App() {
  const [state, setState] = useState(""); 
  const [todo, setTodo] = useState([]); 
  const [selectedTodoIndex,setSelectedTodoIndex] = useState(null)
    
  const handleChange = (e) => { setState(e.target.value); }; 
  const handleClick = () => { setTodo([...todo, state]); setState(""); }; 
  const handleUpdate = (selectedTodo,index)=> { setSelectedTodoIndex(index=== 0 ? '0' : index) setState(selectedTodo) } 
  const handleDelete = (id) => { const temp = [...todo]; temp.splice(id,1) setTodo(temp) }
  const handleUpdateTodo=()=>{ const temp = [...todo]; temp[+selectedTodoIndex] = state setTodo(temp) setState('') } 
    return ( 
      <div className="App"> 
      <input type="text" name="test" value={state} onChange={handleChange} /> 
    { selectedTodoIndex ? <button onClick ={handleUpdateTodo}>update</button>:<button onClick={handleClick}>add</button>} 
{todo.map((data,index)=> ( <div key={index}> <p>{data}</p> <button onClick={() => handleUpdate(data,index)}>edit</button> 
  <button onClick={() => handleDelete(index)}>delete</button> </div> ))} </div> ); } ("");

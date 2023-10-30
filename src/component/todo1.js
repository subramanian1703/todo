import { useState } from "react";
import "./styles.css";

export default function App() {
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const [selectedIndex,setSelectedIndex] = useState(null);
  const [toggle,setToggle] = useState(false);
  
  const handleAdd = () => {
    setTodos([...todos,todo])
    setTodo("")
  }
  const handleEdit = (data,index) => {
    setToggle(true)
    setSelectedIndex(index)
    setTodo(data)
  }
  const handleUpdate = () => {
    const temp = [...todos];
    temp[selectedIndex] = todo;
    setTodos(temp)
    setSelectedIndex(null)
    setToggle(false)
    setTodo("")
  }
  
  const handleDelete = (index) => {
    const temp = [...todos];
    temp.splice(index,1)
    setTodos(temp)
  }
  return (
    <div className="App">
      <input name="todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      {!toggle ?       <button onClick={handleAdd}>Add</button>
:       <button onClick={handleUpdate}>update</button>
}
      {todos?.map((data,index) => (
        <div index={index}>
        <p>{data}</p>
        <button onClick={() => handleEdit(data,index)}>edit</button>
        <button onClick={() => handleDelete(index)}>delete</button>
        </div>
      ))}
    </div>
  );
}

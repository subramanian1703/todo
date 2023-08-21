import React, { useState } from 'react'

const Todoobj = [
  { id: 1, name: "test", checked: false },
  { id: 2, name: "test1", checked: false },
  { id: 3, name: "test2", checked: false },
]
function Todo() {
  const [todo, setTodo] = useState(Todoobj)

  const handleCheckBox = (event, index) => {
    const tempTodo  = [...todo]
    tempTodo[index].checked = event.target.checked;
    setTodo(tempTodo)
  }

  const handleSelectAll = (e) => {
    const allChecked = todo.map((data) => ({ ...data,checked:e.target.checked}))
    setTodo(allChecked)
  }

  return (
    <div>
      <input type='checkbox' 
        name={Todoobj.name} checked={Todoobj.checked} onChange={handleSelectAll}/>
      {todo?.map((data, i) => (
      <div style={{display:"flex"}} key={i}>
        <input 
        type='checkbox' 
        name={data.name} checked={data.checked} onChange={(e) => handleCheckBox(e, i)} />
        <p>{data.name}</p>
      </div>
    ))}</div>
  )
}

export default Todo
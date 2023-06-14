import { type } from 'os'
import React from 'react'
import {Todo} from "../models"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "../components/styles.css"
import { Todolist } from './Todolist'

type props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo = ({todo,todos,setTodos}:props) => {

  
  const handleDone =(id:Number)=>{
    setTodos(todos.map(todo => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    }));
    
  };
  
  const handleDelete = (id:Number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  




  return (
<form className='todos__single'>

{todo.isDone ? (
  <s className="single_todo_text">{todo.todo}</s>
) : (
  <span className="single_todo_text">{todo.todo}</span>
)}


 <div>
  <span className="icons">
    <AiFillEdit/>
  </span>
  <span className="icons">
    <AiFillDelete onClick={() => handleDelete(todo.id)} />
  </span>
  <span className="icons">
    <MdDone onClick={()=>handleDone(todo.id)} />
  </span>
 </div>
</form>
  )
}

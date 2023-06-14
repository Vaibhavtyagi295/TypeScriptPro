import React from 'react'
import { Todo } from '../models'
import { SingleTodo } from './singleTodo'

interface Props {
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}


export const Todolist:React.FC<Props>= ({todos,setTodos}) => {
  return ( 
    <div className="todolist">
        {todos.map((todo) => (
         <SingleTodo 
         todo ={todo}
          key={todo.id.toString()} 
          todos={todos} 
          setTodos={setTodos}/>
        ))}
    </div>
  )
}

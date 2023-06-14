import React, { useRef } from 'react'
import "./styles.css"
import { Interface } from 'readline'
import { Todo } from '../models'


interface Props {
  todo:String,
  setTodo:React.Dispatch<React.SetStateAction<String>>
  handleadd:(e:React.FormEvent)=>void;
}

const InputField = ({todo,setTodo,handleadd}:Props) => {

  const input = useRef<HTMLInputElement>(null)
  return (
<form className="input" onSubmit={(e)=>{
  handleadd(e)
  input.current?.blur()
}}>
  <input
    type="input"
  value=
  {todo.toString()}
    onChange={(e) => 
      setTodo(e.target.value)}
    placeholder='
    Enter Your task'
    className=
    'input_box'
  />
  <button className="input_sumbit" 
  type='submit'>Go</button>
</form>

  )
}

export default InputField
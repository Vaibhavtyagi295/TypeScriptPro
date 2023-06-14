import React, { useState } from 'react';
import './App.css';
import { type } from 'os';
import InputField from './components/InputField';
import { Todo } from './models';
import { Todolist } from './components/Todolist';


// let arr:string[] = ["vaibhav","kllkjm"];
// let arr4:number[] = [1,2];
// let role :[string,number,boolean];

// role=["hello",5,false]

// console.log(role)

// type Person ={
//   name:string,
//   age?:Number,
// };

// let person :Person = {
//   name:"aman",
// }

// let games:(name:String,number:number)=> void


// games = (name,number)=>{
//   console.log(name,number)
// }

// games("jello",7474)

// console.log(person)

const App:React.FC = ()=>{
  const [todo, setTodo] = useState<String>("");

   const [todos,setTodos] = useState<Todo[]>([]);

   const handleAdd =(e:React.FormEvent)=>{
   e.preventDefault()

   if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone :false}]);
    setTodo("")
   }
  };

  console.log(todos)


  return (
      <div className="App">
     <span className="heading">
         TaskMaster
     <InputField
      todo ={todo}
     setTodo={setTodo} 
     handleadd={handleAdd}/>
     <Todolist
      todos={todos} 
      setTodos={setTodos}/>

       </span>
      </div>
  );
}

export default App;

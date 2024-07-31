 import { useState } from "react"
 import { useEffect } from "react";
 import { v4 as uuidv4 } from 'uuid';

 export default function  Form({input,setInput,todos,setTodos,edit,setEdit}){
    const updateTodo=(title,id,completed)=>{
        const newTodo=todos.map((todo)=>
            todo.id===id? {title,id,completed}:todo
        )
        setTodos(newTodo);
    setEdit("")
    }
    useEffect(()=>{
      if(edit){
        setInput(edit.title);
      }  else{
        setInput("")
      }
    },[setInput,edit])
    
    function handleChange(event){
        setInput(event.target.value)
    }
    function onFormsubmit(event){
        event.preventDefault()
        if(!edit){
            setTodos([...todos,{id:uuidv4(),title:input,completed:false}]);
            setInput(" ");
        }else{
            updateTodo(input,edit.id,edit.completed)
        }
        
    }

    return(
        <div>
            <form onSubmit={onFormsubmit}>
                <input type="text" 
                name="inputText"
                value={input}
                required 
                onChange={handleChange}
                placeholder="please enter your task" 
                className=" text-white bg-[#030101] px-3 py-2 w-[60%] outline-none rounded-[5px] mx-6 my-6"/>
                <button className="px-2 rounded-[5px] py-2 bg-[#d7a573]">{edit ?"ok":" Add Task" }</button>
            </form>
        </div>
    )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Form from './Form'
import Todolist from './todolist'
import './App.css'


function App() {
  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])
  const [edit,setEdit]=useState(null)
  return (<div className='bg-gray-900 w-[30%] mx-auto h-[500px] my-20 rounded-xl shadow-2xl shadow-slate-400'>
    <Header/>
    <Form input={input} required
    setInput={setInput}
    todos={todos}
    setTodos={setTodos}
    edit={edit}
    setEdit={setEdit}/>
    <Todolist todos={todos}
    setTodos={setTodos}
    edit={edit}
    setEdit={setEdit}/>
  </div>)
    
}

export default App

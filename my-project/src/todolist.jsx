export default function Todolist({todos,setTodos,edit,setEdit}){
    function handleDelete({id}){
    setTodos(todos.filter((el)=>el.id !== id))
    }
    function handleComplete(todo){
        setTodos(todos.map((el)=> {
            if(el.id === todo.id){
              return   {...el,completed:!el.completed}
            }}))
       
    }
    function handleEdit({id}){
      const findTodo = todos.find((todo)=>todo.id === id)
      setEdit(findTodo)
    // console.log("any")
    }
    return(
        <div className="">
        {
            todos.map((todo)=>(<li className={`cursor-pointer p-2 mb-2 rounded ${
              todo.completed ? 'line-through text-gray-500' : 'white'}
            text-white  w-4/5 border mx-auto flex gap-5 mb-4`} key={todo.id}><input type= "text" value={todo.title}
                required 
                onChange={(event)=>event.target.value} className={` bg-gray-950  py-2 px-2`}/>
                <button onClick={()=>handleComplete(todo)}><i className="fa fa-check-circle text-[#d7a573]"></i></button>
                <button onClick={()=>handleEdit(todo)}><i className="fa fa-edit text-[#D2B936]"></i></button>
                <button onClick={()=>handleDelete(todo)}><i className="fa fa-trash text-[#1A9196]"></i></button>
                </li>))
        }
        </div>
    )
}
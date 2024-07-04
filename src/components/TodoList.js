import React,{useEffect,useState} from 'react'

const TodoList=()=> {
    const [todos,setTodos] =useState([])
    const [search,setSearch]=useState('');
    useEffect(()=>{
        const fetchTodos=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/todos");
            const json=await res.json();
            setTodos(json);
        }
        fetchTodos()
    },[])
    let filteredTodos = todos.filter(({title})=>{
        return title.indexOf(search) >=0
    })
    let renderedUsers =filteredTodos.slice(0,10).map((todo)=>{
        return (
            <div key={todo.id}>
                <p>
                <strong>{todo.title}</strong>
                </p>
            </div>
        )
    })
    
  return (
    <>
    <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
    <div> {renderedUsers}</div>
    </>
    
  )
}

export default TodoList;
import React,{useEffect,useState} from 'react'

const UserList=()=> {
    const [users,setUsers] =useState([])
    const [search,setSearch]=useState('');
    useEffect(()=>{
        const fetchUsers=async()=>{
            const res=await fetch("https://jsonplaceholder.typicode.com/users");
            const json=await res.json();
            setUsers(json);
        }
        fetchUsers()
    },[])
    let filteredUsers = users.filter(({name})=>{
        return name.indexOf(search) >=0
    })
    let renderedUsers =filteredUsers.map((user)=>{
        return (
            <div key={user.id}>
                <p>
                <strong>{user.name}</strong>
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

export default UserList;
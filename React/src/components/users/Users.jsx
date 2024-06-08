import { useState,useEffect } from "react";

function Users(){

    let [users,setUsers]=useState([])

    async function getUsers(){
        let res=await fetch('https://jsonplaceholder.typicode.com/users')
        let usersList=await res.json();
        setUsers(usersList)
    }

    useEffect(()=>{
        getUsers()
    },[])

    return(
        <div className="text-center">
            <h2 className="display-3 text-info">Users</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(userObj=><tr key={userObj.id}>
                            <td>{userObj.id}</td>
                            <td>{userObj.name}</td>
                            <td>{userObj.username}</td>
                            <td>{userObj.email}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;
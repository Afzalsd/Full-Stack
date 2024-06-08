import { useState ,useEffect} from 'react';
import {useLocation} from 'react-router-dom'

function RegisteredUsers(){

    let [usersList, setUsersList] = useState([]);
    let {state}=useLocation()

    useEffect(()=>{
        setUsersList([...usersList,state])
    },[])

   console.log(state)
    return(
        <div>
              {/* display regisered users */}
              <h2 className="text-center text-primary display-3 mt-5">List of Users</h2>
            <table className="table text-center table-bordered">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersList.map(userObj=><tr key={userObj.username}>
                            <td>{userObj.username}</td>
                            <td>{userObj.password}</td>
                            <td>{userObj.email}</td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    )
}

export default RegisteredUsers;
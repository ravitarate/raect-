import { useEffect,useState } from "react";

export function DataFetch(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            response.json().then((data)=>{
                setUsers(data);
                console.log(data);
            })

        }).catch((error)=>{
            console.log(error);
        })


    },[]);
    return(
        <div>
            <h1>list of users</h1>
            <table border={1} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((u)=>{
                            return(
                                <tr>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                </tr>
                            )

                        })
                       }

                    </tbody>
            </table>

        </div>
    )
}
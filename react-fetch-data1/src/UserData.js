import { Component } from "react";

export class UserData extends Component{

    constructor(){
        super();
        this.state={
            users:[]
        }
    }
    render(){
        return(
            <div>
                <h1>List of users</h1>
                 <table border={1} cellPadding={10}>
                    <thead>
                         <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.state.users.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
            response.json().then((data)=>{
                this.setState({users:data});
            })
        }).catch((error)=>{
            console.log(error);
        })
    }
        
    
}
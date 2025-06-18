import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

export function Weather(){
    const[fetchWether, setWether] = useState([]);

    useEffect(()=>{
        fetch('http://api.weatherapi.com/v1/current.json?key=95cd9cce901340acbe9105054252905&q=London&aqi=no').then((res)=>{
            res.json().then((r)=>{
                setWether(r.location);
            })
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return(
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>region</th>
          <th>country</th>
          <th>Read More</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{fetchWether.name}</td>
          <td>{fetchWether.region}</td>
          <td>{fetchWether.country}</td>
          <td><a href="/"> india</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td>{fetchWether.name}</td>
          <td>{fetchWether.region}</td>
          <td>{fetchWether.country}</td>
          <td><a href="/"> india</a></td>
        </tr>
        
        
      </tbody>
    </Table>
    )
}
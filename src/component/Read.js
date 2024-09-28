import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';

const Read = () => {
    const[data,setData]=useState([]);
    
    function getData(){
        axios.get("https://65c4a175dae2304e92e2f916.mockapi.io/crud")
        .then((res)=>{
        console.log(res.data);
        setData(res.data);
        });
    }


    function handleDelete(id){
    alert("Data wants to be deleted");   
    axios.delete(`https://65c4a175dae2304e92e2f916.mockapi.io/crud/${id}`)
    .then(()=>{
    getData();
    })
    }
    const setToLocalStorage = (id,e_name,e_email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",e_name);
        localStorage.setItem("email",e_email);
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <div>
        <h2>Read Data</h2>
        
         <Link to="/Create"><input type="submit" value="Add" class="btn btn-primary d-flex justify-content-center "/></Link>
     
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th colSpan="2">Action</th>

      {/* <th scope="col">Edit</th>
      <th scope="col">Delete</th> */}

    </tr>
  </thead>
  {
  data.map((eachData)=>{
    return(
        <>
         <tbody>
      <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.e_name}</td>
      <td>{eachData.e_mail}</td>
      <td><Link to="/edit"><button type="button"  onClick={()=>setToLocalStorage(eachData.id,eachData.e_name,eachData.e_mail)}  className="btn btn-success">Edit</button></Link></td>
      <td><button type="button" onClick={()=>handleDelete(eachData.id)} className="btn btn-danger">Delete</button></td>
      </tr></tbody>
    </>
  )}
)}
</table>
</div>
)
}

export default Read

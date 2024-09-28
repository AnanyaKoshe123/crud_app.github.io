
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const navigate=useNavigate("/");
    
useEffect(()=>{
setId(localStorage.getItem("id") );
setName(localStorage.getItem("name") );
setEmail(localStorage.getItem("email") );
},[]);

const handleUpdate= (e)=>{
    e.preventDefault();
    console.log("clik")
      axios.put(`https://65c4a175dae2304e92e2f916.mockapi.io/crud/${id}`,
      {e_name:name,
       e_mail:email}).then(result=>{
        navigate("/read");       
        }).catch(error=>{
          console.log(error)
        })

  }
   

  return (
    <div>
        <h1>Update</h1>
      <form >
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control"
            value={name}
            onChange={(e)=>setName(e.target.value)} 
            />
        </div>
        <div className="mb-3">
            <label  className="form-label">Email Address</label>
            <input type="email" className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            />
        </div>
        <button type="submit"  onClick={handleUpdate} className="btn btn-primary">Update</button>
        </form>
            </div>
            )
}
export default Edit

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Create from './Create'
import { Link } from 'react-router-dom'

const Read = () => {
    const[apidata,setapiData]=useState([])
    function getData(){
        axios.get('https://65c4a175dae2304e92e2f916.mockapi.io/crud').then((response)=>{
            setapiData(response.data);

        })
    }
    useEffect(()=>{
        getData();
        
    },[])
    //getData();
    function handleDelete(id){
        axios.delete(`https://65c4a175dae2304e92e2f916.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        });

    }
    function setDataToStorage(id,name,age,email)
    {
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);


    }
  return (
    <>
    <div className='row'>
        <div> 
            <Link to="/create">  
        <button type="button" class="btn btn-primary mb-2">Create New Data</button>
        </Link> 
        </div>
        <div className='col-md-12'>
            <table className='table table-bordered table-striped table-dark table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>EMAIL</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
               {
                apidata.map((item)=>{
                    return(
                        <>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.e_name}</td>
                        <td>{item.e_age}</td>
                        <td>{item.e_mail}</td>
                        <td>
                            <Link to={'/edit'}><button type="button" class="btn btn-primary" onClick={()=>setDataToStorage(item.id,item.e_name,item.e_age,item.e_mail)}>Edit</button>
                            </Link>
                            
                            </td>
                        <td><button type="button" class="btn btn-danger" onClick={()=>{
                            if(window.confirm('Are you sure to Delete data?'))
                            {
                                handleDelete(item.id)
                            }
                        }}>Delete</button></td>

                       


                        </tr>
                        
                        
                        
                        </>
                    )

                })
               }



                </tbody>




            </table>





        </div>





    </div>
    </>
  )
}

export default Read

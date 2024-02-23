import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[email,setEmail]=useState('');

    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://65c4a175dae2304e92e2f916.mockapi.io/crud',{e_name:name,e_age:age,e_mail:email}).then(()=>{
            navigate("/")
        })

    }

  return (
    <div>
        <section class="vh-100" styles="background-color: #9A616D;">
  <div class="container-fluid mt-5  h-50">
    <div class="row d-flex justify-content-center align-items-center h-70">
      <div class="col col-lg-10">
        <div class="card" styles="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 mt-5  d-none d-md-block">
              <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" w="100"
                alt="login form" class="img-fluid" styless="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form  onSubmit={handleSubmit}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-1" styles="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">CREATE DATA</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" styles="letter-spacing: 1px;">Insert data .....</h5>

                  <div class="form-outline mb-4">
                    <input type="text" id="form2Example17" class="form-control form-control-lg" onChange={(e)=>setName(e.target.value)} />
                    <label class="form-label" for="form2Example17">Name</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="number" id="form2Example27" class="form-control form-control-lg" onChange={(e)=>setAge(e.target.value)} />
                    <label class="form-label" for="form2Example27">Age</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example27" class="form-control form-control-lg" onChange={(e)=>setEmail(e.target.value)} />
                    <label class="form-label" for="form2Example27">Email</label>
                  </div>
                  <div className='d-grid'>
            <input type='submit' value='submit' className='btn btn-primary'/>

            </div>
                  <div class="pt-1 mb-4">
                    
                  </div>

                  <p class="mb-1 pb-lg-2" styles="color: #393f81;">To Read the inserted Data </p>
                  <Link to="/"
                 styles="color: #393f81;"> Click Here</Link>
               
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
    
  )
}

export default Create

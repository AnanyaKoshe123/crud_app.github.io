import React from 'react'

const Delete = () => {
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

                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" styles="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">LOGIN FORM</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" styles="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example17">Name</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Age</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example27">Email</label>
                  </div>
                  <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <p class="mb-5 pb-lg-2" styles="color: #393f81;">Don't have an account? <a href="#!"
                      styles="color: #393f81;">Register here</a></p>
               
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

export default Delete

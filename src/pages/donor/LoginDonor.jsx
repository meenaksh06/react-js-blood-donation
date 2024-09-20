// import React from 'react';
// import { logo1, lable } from '../../assets/img';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginDonor = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault(); // Prevent the default form submission behavior
//         // Optionally, you can add any other logic here, such as showing a message to the user

//     };
//     return (
//         <div>
//             <div className="text-center p-3 container-md">
//                 <Link to="/">
//                     <img src={logo1} className="h-25 w-75 rounded" alt="..." />
//                 </Link>
//             </div>
//             <div id="intro-example" className="text-center bg-image align-items-center">
//                 <section>
//                     <div className="container h-100">
//                         <div className="row d-flex justify-content-center align-items-center h-100">
//                             <div className="col-lg-12 col-xl-11">
//                                 <div className="card text-black" style={{ borderRadius: "25px" }}>
//                                     <div className="card-body p-md-5">
//                                         <div className="row justify-content-center">
//                                             <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                                                 <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Welcome Back Our beloved Blood Donor!</p>
//                                                 <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
//                                                     <div className="d-flex flex-row align-items-center mb-4">
//                                                         <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                                                         <div className="form-outline flex-fill mb-0">
//                                                             <input type="email" name="email" id="form3Example3c" className="form-control" placeholder="Your email" />
//                                                         </div>
//                                                     </div>
//                                                     <div className="d-flex flex-row align-items-center mb-4">
//                                                         <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                                                         <div className="form-outline flex-fill mb-0">
//                                                             <input type="password" name="password" id="form3Example4c" className="form-control" placeholder="Password" />
//                                                         </div>
//                                                     </div>
//                                                     <div className="form-check d-flex justify-content-center mb-5">
//                                                         <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                                                         <label className="form-check-label" htmlFor="form2Example3">
//                                                             I agree all statements in <a href="#!">Terms of service</a>
//                                                         </label>
//                                                     </div>
//                                                     <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                                                         <button name="login" className="btn btn-primary btn-lg">Login</button>
//                                                     </div>
//                                                     <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                                                         <p className="small mb-0">Don't have account? <Link to="/register-donor">Create an account</Link></p>
//                                                     </div>
//                                                 </form>
//                                             </div>
//                                             <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                                                 <Link to={'/home-donor'}>
//                                                     <img src={lable} className="img-fluid rounded-4" alt="Sample image" />
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default LoginDonor;




import React, { useState } from 'react';
import { logo1, lable } from '../../assets/img';
import { Link, useNavigate } from 'react-router-dom';

const LoginDonor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Simple validation: hardcoded email and password for demonstration
    const validEmail = 'john@gmail.com';
    const validPassword = '1234';

    if (email === validEmail && password === validPassword) {
      // If the credentials match, navigate to the home-donor page
      navigate('/home-donor');
    } else {
      // If the credentials don't match, set an error message
      setError('Password or email incorrect!');
    }
  };

  return (
    <div style={{backgroundColor: '#eaeaea'}}>
      <div className="text-center p-3 container-md">
        <Link to="/">
          <img src={logo1} className="h-25 w-75 rounded" alt="logo" />
        </Link>
      </div>
      <div id="intro-example" className="text-center bg-image align-items-center">
        <section>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Welcome Back Our beloved Blood Donor!
                        </p>

                        {/* Show error message if credentials are incorrect */}
                        {error && (
                          <p className="text-center text-danger mb-5 mx-1 mx-md-4 mt-4">
                            {error}
                          </p>
                        )}

                        <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                name="email"
                                id="form3Example3c"
                                className="form-control"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Set email state
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                name="password"
                                id="form3Example4c"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Set password state
                              />
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button name="login" className="btn btn-primary btn-lg">Login</button>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <p className="small mb-0">Don't have an account? <Link to="/register-donor">Create an account</Link></p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <Link to={'/home-donor'}>
                          <img src={lable} className="img-fluid rounded-4" alt="Sample image" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginDonor;

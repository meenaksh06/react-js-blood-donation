// import React from 'react';
// import { logo2 } from '../assets/img';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="text-center p-3 container-md">
//       <Link to="/">
//         <img src={logo2} className="h-25 w-75 rounded" alt="..." />
//       </Link>
//       <div id="intro-example" className="text-center bg-image align-items-center">
//         <section>
//           <div className="container h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-lg-12 col-xl-11">
//                 <div className="card text-black background-image" style={{ borderRadius: '25px' }}>
//                   <div className="card-body p-md-5">
//                     <div className="row justify-content-center">
//                       <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-3 text-uppercase">
//                         Welcome to Blomo
//                       </p>

//                       <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                         <div className="text-black">
//                           <h5 className="mb-3">
//                             Join us to help save lives and bring joy to families through your blood contribution.
//                           </h5>

//                           {/* Navigation Links */}
//                           <Link to="/login-donor" className="btn btn-outline-dark btn-lg m-1" role="button" rel="nofollow">
//                             Login Donor
//                           </Link>
//                           <Link to="/login-staff" className="btn btn-outline-dark btn-lg m-1" role="button">
//                             Login Hospital
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <h1 className='tagline'>Your Blood, Their Hope. Together, We Heal</h1>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';
import logo3  from "../assets/img/logo3.png";
import { Link } from 'react-router-dom';
import b3 from '../assets/img/b3.jpg';


const Home = () => {
  return (
    <div style={{ backgroundColor: '#eaeaea', minHeight: '100vh' }}>
      <div className="text-center p-3 container-md" >
        <Link to="/">
          <img src={logo3} className="h-25 w-75 rounded" alt="..." />
        </Link>
        <div id="intro-example" className="text-center bg-image align-items-center">
          <section>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black" style={{ borderRadius: '25px', backgroundImage: `url(${b3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-3 text-uppercase" style={{ fontSize: '3.1rem', fontFamily: "'Playfair Display', serif", letterSpacing: '2px', textShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
                          Welcome to Blomo
                        </p>
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <div className="text-black">
                            <h5 className="mb-3" style={{ fontSize: '1.2rem', fontFamily: "'Playfair Display', serif", letterSpacing: '2px', textShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>
                              Join us to help save lives and bring joy to families through your blood contribution.
                            </h5>

                            {/* Navigation Links */}
                            <Link to="/login-donor" className="btn btn-outline-dark btn-lg m-1" role="button" rel="nofollow">
                              Login Donor
                            </Link>
                            <Link to="/login-staff" className="btn btn-outline-dark btn-lg m-1" role="button">
                              Login Hospital
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className="tagline" style={{ fontSize: '3rem', fontFamily: "'Playfair Display', serif", letterSpacing: '2px', textShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}>Your Blood, Their Hope. Together, We Heal</h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React, { useState } from 'react';
// import { Navbar, Footer } from '../../components';

// const HomeDonor = ({ allDonors, successMessage }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const donorsPerPage = 8;

//   // Calculate the index of the last donor on the current page
//   const indexOfLastDonor = currentPage * donorsPerPage;
//   // Calculate the index of the first donor on the current page
//   const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
//   // Get the donors for the current page
//   const currentDonors = allDonors.slice(indexOfFirstDonor, indexOfLastDonor);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//     // Optionally, you can add any other logic here, such as showing a message to the user
//   };

//   return (
//     <div style={{background: '#eaeaea'}}>
//       {/* Navbar */}
//       <Navbar username={'John Doe'} homeColor={'primary'} />

//       {/* Success Message */}
//       {successMessage && (
//         <p className="text-center alert alert-success" id="myAlert"><strong>{successMessage}</strong></p>
//       )}

//       {/* Main Content */}
//       <div id="carouselExample" className="carousel">
//         <div className="carousel-inner">
//           {/* Carousel items here */}
//         </div>
//       </div>

//       {/* Donor Cards */}
//       <div className="container">
//         <div className="row">
//           {currentDonors.map((donor, index) => (
//             <article key={index} className="col-md-4 col-lg-4">
//               <h2>Blood Request</h2>
//               <div className="card bg-light rounded-4 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-uppercase mb-4 text-primary">HOSPITAL REQUEST</h5>
//                   <ul className="list-unstyled">
//                     <li><strong>HospitalOfficer Name:</strong> {donor.full_name}</li>
//                     <li><strong>Gender:</strong> {donor.gender}</li>
//                     <li><strong>HospitalOfficer Phone:</strong> {donor.phone_number}</li>
//                     <li><strong>Hospital Location:</strong> {donor.hospital_name}</li>
//                     <li><strong>Hospital Address:</strong> {donor.hospital_address}</li>
//                     <li><strong>Hospital Contact:</strong> {donor.hospital_contact}</li>
//                     <li><strong>Hospital Email:</strong> {donor.hospital_email}</li>
//                     <li><strong>Appointment Time:</strong> {donor.request_date}</li>
//                   </ul>
//                   <div className="d-flex justify-content-between mt-3">
//                     {/* Buttons for cancel and accept */}
//                     <form onSubmit={handleSubmit}>
//                       <button className="btn btn-danger">Cancel</button>
//                     </form>
//                     <form onSubmit={handleSubmit}>
//                       <button className="btn btn-success">Accept</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//               {/* <h1>Healty Blogs & Tips</h1> */}
//               <h2>Healthy Tips and Blogs</h2>
//               <div className="card bg-light rounded-4 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-uppercase mb-4 text-primary">Five Simple Habits</h5>
//                   <ul className="list-unstyled">
//                     <p>1)Stay Hydrated: Drink 8 glasses of water daily for energy and digestion.</p>
//                     <p>2)Balanced Diet: Include fruits, veggies, and lean proteins for essential nutrients.</p>
//                     <p>3)Exercise: Get 30 minutes of activity daily—walk, cycle, or do yoga.</p>
//                     <p>4)Sleep: Aim for 7-8 hours nightly for mental and physical health.</p>
//                     <p>5)Mental Wellness: Practice mindfulness to reduce stress and boost well-being.</p>
//                   </ul>
//                 </div>
//               </div>

//               <h2>Nearby Blood Donors</h2>
//               <div className="card bg-light rounded-4 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-uppercase mb-4 text-primary">Donor Details</h5>
//                   <ul className="list-unstyled">
//                     <li><span style={{ fontWeight: 'bold', display: 'inline' }}>Donor Name:</span><span style={{ display: 'inline' }}> Rahul Singh</span></li>
//                     <li><span style={{ fontWeight: 'bold', display: 'inline' }}>Donor Blood group:</span><span style={{ display: 'inline' }}> AB+</span></li>
//                     <li><span style={{ fontWeight: 'bold', display: 'inline' }}>Donor Location:</span><span style={{ display: 'inline' }}> Mayur Vihar, Delhi</span></li>
//                     <li><span style={{ fontWeight: 'bold', display: 'inline' }}>Donor Mobile No:</span><span style={{ display: 'inline' }}> 9236723612</span></li>
//                   </ul>
//                   <div className="d-flex justify-content-center mt-3">
//                     {/* Buttons for cancel and accept */}
//                     <form onSubmit={handleSubmit}>
//                       <button className="btn btn-success">Send Request</button>
//                     </form>
//                   </div>
//                 </div>
//               </div>


//             </article>
//           ))}
//         </div>
//       </div>

//       {/* Healthy Blogs Section */}
//       {/* <div className="container mt-5">
//         <h3 className="text-center text-uppercase text-primary mb-4">Healthy Life Blogs</h3>
//         <div className="row">
//           {blogs.map((blog, index) => (
//             <article key={index} className="col-md-6 col-lg-4">
//               <div className="card bg-light rounded-4 shadow">
//                 <div className="card-body">
//                   <h5 className="card-title text-center text-uppercase mb-4">{blog.title}</h5>
//                   <p className="card-text">{blog.excerpt}</p>
//                   <a href={blog.link} className="btn btn-primary">Read More</a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div> */}

//       {/* Pagination links */}
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <nav aria-label="Page navigation example">
//               <ul className="pagination justify-content-center">
//                 <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                   <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>Previous</a>
//                 </li>
//                 {Array.from({ length: Math.ceil(allDonors.length / donorsPerPage) }).map((_, i) => (
//                   <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
//                     <a className="page-link" href="#" onClick={() => paginate(i + 1)}>{i + 1}</a>
//                   </li>
//                 ))}
//                 <li className={`page-item ${currentPage === Math.ceil(allDonors.length / donorsPerPage) ? 'disabled' : ''}`}>
//                   <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>Next</a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default HomeDonor;


import React, { useState } from 'react';
import { Navbar, Footer } from '../../components';

const HomeDonor = ({ allDonors, successMessage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 8;

  // Calculate the index of the last donor on the current page
  const indexOfLastDonor = currentPage * donorsPerPage;
  // Calculate the index of the first donor on the current page
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  // Get the donors for the current page
  const currentDonors = allDonors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Optionally, you can add any other logic here, such as showing a message to the user
  };

  return (
    <div style={{ background: '#eaeaea' }}>
      {/* Navbar */}
      <Navbar username={'John Doe'} homeColor={'primary'} />

      {/* Success Message */}
      {successMessage && (
        <p className="text-center alert alert-success" id="myAlert"><strong>{successMessage}</strong></p>
      )}

      {/* Main Content */}
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
          {/* Carousel items here */}
        </div>
      </div>

      {/* Donor Cards */}
      <div className="container">
        <div className="row">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', marginBottom: '20px', padding: '10px', borderBottom: '4px solid #e53e3e' }}>
            Blood Requests
          </h2>
          {currentDonors.map((donor, index) => (
            <article key={index} className="col-md-4 col-lg-4">
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-4 text-primary">HOSPITAL REQUEST</h5>
                  <ul className="list-unstyled">
                    <li><strong>HospitalOfficer Name:</strong> {donor.full_name}</li>
                    <li><strong>Gender:</strong> {donor.gender}</li>
                    <li><strong>HospitalOfficer Phone:</strong> {donor.phone_number}</li>
                    <li><strong>Hospital Location:</strong> {donor.hospital_name}</li>
                    <li><strong>Hospital Address:</strong> {donor.hospital_address}</li>
                    <li><strong>Hospital Contact:</strong> {donor.hospital_contact}</li>
                    <li><strong>Hospital Email:</strong> {donor.hospital_email}</li>
                    <li><strong>Appointment Time:</strong> {donor.request_date}</li>
                  </ul>
                  <div className="d-flex justify-content-between mt-3">
                    {/* Buttons for cancel and accept */}
                    <form onSubmit={handleSubmit}>
                      <button className="btn btn-danger">Cancel</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <button className="btn btn-success">Accept</button>
                    </form>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', marginBottom: '20px', padding: '10px', borderBottom: '4px solid #e53e3e' }}>
          Healthy Tips and Blogs
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card bg-light rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase mb-4 text-primary">Five Simple Habits</h5>
                <ul className="list-unstyled">
                  <p>1) Stay Hydrated: Drink 8 glasses of water daily for energy and digestion.</p>
                  <p>2) Balanced Diet: Include fruits, veggies, and lean proteins for essential nutrients.</p>
                  <p>3) Exercise: Get 30 minutes of activity daily—walk, cycle, or do yoga.</p>
                  <p>4) Sleep: Aim for 7-8 hours nightly for mental and physical health.</p>
                  <p>5) Mental Wellness: Practice mindfulness to reduce stress and boost well-being.</p>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-light rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase mb-4 text-primary">The 7-Day Mindful Living Challenge</h5>
                <ul className="list-unstyled">
                  <p>1) Content: A step-by-step guide to incorporating mindfulness into everyday life, covering breathing exercises, mindful eating, gratitude journaling, and walking meditation.</p>
                  <p>2) Engagement: Offer downloadable worksheets and a progress tracker for readers to follow along with the challenge.</p>
                  <p>3) Why Unique? Introduces small, daily challenges that lead to long-term mental wellness habits.</p>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card bg-light rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase mb-4 text-primary">Follow the 80/20 rule</h5>
                <ul className="list-unstyled">
                  <p>1) 80% Whole, Nutrient-Dense Foods: Focus on eating fruits, vegetables, whole grains, lean proteins, and healthy fats most of the time.</p>
                  <p>2) 20% Indulgent Foods: Enjoy treats or less nutritious foods like desserts, snacks, or fast food occasionally without guilt.</p>
                  <p>3) Sustainable and Flexible: This approach allows for flexibility, making it easier to maintain long-term healthy eating habits without feeling deprived.</p>
                  <p>4) Prevents Overeating: By allowing some indulgence, it reduces the urge to binge or overeat unhealthy foods.</p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            marginBottom: '20px',
            padding: '10px',
            borderBottom: '4px solid #e53e3e',
          }}
        >
          Nearby Donors
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card bg-light rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase mb-4 text-primary">
                  Donor Details
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>Donor Name:</strong> Deepti Sharma
                  </li>
                  <li>
                    <strong>Donor Blood group:</strong> O+
                  </li>
                  <li>
                    <strong>Donor Location:</strong> Street 123, Delhi
                  </li>
                  <li>
                    <strong>Donor Mobile No:</strong> 9322327031
                  </li>
                </ul>
                <div className="d-flex justify-content-center mt-3">
                  <form onSubmit={handleSubmit}>
                    <button className="btn btn-success">Send Request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-light rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase mb-4 text-primary">
                  Donor Details
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>Donor Name:</strong> Rahul Singh
                  </li>
                  <li>
                    <strong>Donor Blood group:</strong> AB+
                  </li>
                  <li>
                    <strong>Donor Location:</strong> Mayur Vihar, Delhi
                  </li>
                  <li>
                    <strong>Donor Mobile No:</strong> 9236723612
                  </li>
                </ul>
                <div className="d-flex justify-content-center mt-3">
                  <form onSubmit={handleSubmit}>
                    <button className="btn btn-success">Send Request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-light rounded-4 shadow">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase mb-4 text-primary">
                  Donor Details
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>Donor Name:</strong> Nisha Goel
                  </li>
                  <li>
                    <strong>Donor Blood group:</strong> B+
                  </li>
                  <li>
                    <strong>Donor Location:</strong> Street 123, Delhi
                  </li>
                  <li>
                    <strong>Donor Mobile No:</strong> 5638292985
                  </li>
                </ul>
                <div className="d-flex justify-content-center mt-3">
                  <form onSubmit={handleSubmit}>
                    <button className="btn btn-success">Send Request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Pagination links */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage - 1)}>Previous</a>
                </li>
                {Array.from({ length: Math.ceil(allDonors.length / donorsPerPage) }).map((_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => paginate(i + 1)}>{i + 1}</a>
                  </li>
                ))}
                <li className={`page-item ${currentPage === Math.ceil(allDonors.length / donorsPerPage) ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => paginate(currentPage + 1)}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeDonor;



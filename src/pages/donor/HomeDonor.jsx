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

  const handleAccept = () => {
    alert("Appointment booked successfully!");
  };

  const handleSendRequest = () => {
    alert("We will get back to you soon!");
  };

  const handleCancel = () => {
    alert("We're sorry to see you go! Your request has been successfully cancelled.")
  }

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
            <article key={index} className="col-md-4 col-lg-4" >
              <div className="card bg-light rounded-4 shadow" style={{ display: 'flex', height: '90%' }}>
                <div style={{ overflow: 'hidden', borderRadius: ' 15px ', height: '90%' }}>
                  <img
                    src={donor.image}
                    alt="Hospital"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '15px' }}>
                  <ul className="list-unstyled">
                    <li><strong>Blood Group:</strong> {donor.Blood_Group}</li>
                    <li><strong>Hospital Name:</strong> {donor.hospital_name}</li>
                    <li><strong>Hospital Location:</strong> {donor.hospital_location}</li>
                    <li><strong>Hospital Contact:</strong> {donor.hospital_contact}</li>
                    <li><strong>When Needed:</strong> {donor.when_needed}</li>
                  </ul>
                  <div className="d-flex justify-content-between mt-3">
                    <form onSubmit={handleSubmit}>
                      <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <button
                        className="btn btn-success"
                        onClick={handleAccept} // Add onClick handler here
                      >
                        Accept
                      </button>
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
                    <button className="btn btn-success" onClick={handleSendRequest}>Send Request</button>
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
                    <button className="btn btn-success" onClick={handleSendRequest}>Send Request</button>
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
                    <button className="btn btn-success" onClick={handleSendRequest}>Send Request</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomeDonor;



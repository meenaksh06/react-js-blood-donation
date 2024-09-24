import React, { useState } from 'react';
import { Navbar, Footer } from '../../components';
import { appointmentData } from '../../constraints/index.js'; // Adjust the import path as needed

const Appointments = () => {
  const { allAppointments, pastAppointments } = appointmentData; // Use the new appointment data
  const [currentPage, setCurrentPage] = useState(1);
  const donorsPerPage = 8;

  // Calculate the index of the last donor on the current page
  const indexOfLastDonor = currentPage * donorsPerPage;
  // Calculate the index of the first donor on the current page
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  // Get the donors for the current page
  const currentDonors = allAppointments.slice(indexOfFirstDonor, indexOfLastDonor);

  const handleMessage = () => {
    alert("Feedback Submitted Successfully!")
  }

  const [feedbackVisible, setFeedbackVisible] = useState({}); // Track feedback visibility per appointment
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [rating, setRating] = useState('');
  const [improvement, setImprovement] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation check to ensure all fields are filled
    if (name && contact && rating && improvement) {
      handleMessage();  // Show success message
      console.log({ name, contact, rating, improvement });
      // Optionally reset form fields
      setFeedbackVisible({});
      setName('');
      setContact('');
      setRating('');
      setImprovement('');
    } else {
      alert("Please fill in all the fields.");  // Show error message if fields are empty
    }
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const formStyle = {
    marginTop: '20px',
    padding: '20px',
    background: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const submitButtonStyle = {
    marginTop: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  };

  const cancelButtonStyle = {
    marginTop: '10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={{ background: '#eaeaea' }}>
      <Navbar username="John Doe" appointmentsColor={'primary'} />
      <div id="carouselExample" className="carousel">
        <div className="carousel-inner">
          {/* Add your carousel items here */}
        </div>
      </div>

      {/* Render upcoming donor cards */}
      <div className="container">
        <div className="row">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', marginBottom: '20px', padding: '10px', borderBottom: '4px solid #e53e3e' }}>
            Upcoming Appointments
          </h2>
          {currentDonors.map((donor, index) => (
            <article key={index} className="col-md-4 col-lg-4 mb-4">
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-4 text-primary">APPOINTMENT BOOKED</h5>
                  <ul className="list-unstyled">
                    <li><strong>Blood Group:</strong> {donor.Blood_Group}</li>
                    <li><strong>Hospital Name:</strong> {donor.hospital_name}</li>
                    <li><strong>Hospital Location:</strong> {donor.hospital_location}</li>
                    <li><strong>Hospital Contact:</strong> {donor.hospital_contact}</li>
                    <li><strong>Appointment Time:</strong> {donor.when_needed}</li>
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="row">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', marginBottom: '20px', padding: '10px', borderBottom: '4px solid #e53e3e' }}>
            Past Appointments
          </h2>
          {pastAppointments.map((donor, index) => (
            <article key={index} className="col-md-4 col-lg-4 mb-4">
              <div className="card bg-light rounded-4 shadow">
                <div className="card-body">
                  <h5 className="card-title text-center text-uppercase mb-4 text-primary">APPOINTMENT BOOKED</h5>
                  <ul className="list-unstyled">
                    <li><strong>Blood Group:</strong> {donor.Blood_Group}</li>
                    <li><strong>Hospital Name:</strong> {donor.hospital_name}</li>
                    <li><strong>Hospital Location:</strong> {donor.hospital_location}</li>
                    <li><strong>Hospital Contact:</strong> {donor.hospital_contact}</li>
                    <li><strong>Appointment Time:</strong> {donor.when_needed}</li>
                  </ul>
                  <button
                    style={{
                      backgroundColor: '#007BFF',
                      color: 'white',
                      border: 'none',
                      borderRadius: '25px',
                      padding: '12px 24px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s, transform 0.3s',
                      display: 'block',
                      margin: '0 auto',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
                    onClick={() => setFeedbackVisible(prev => ({ ...prev, [index]: !prev[index] }))}
                  >
                    Feedback
                  </button>

                  {feedbackVisible[index] && (
                    <form onSubmit={handleSubmit} style={formStyle}>
                      <h2>Feedback Form</h2>
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          style={inputStyle}
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          placeholder="Mobile No"
                          value={contact}
                          onChange={(e) => setContact(e.target.value)}
                          required
                          style={inputStyle}
                          onKeyPress={(e) => {
                            // Allow only numbers and limit to a certain length if needed (e.g., 10)
                            if (!/[0-9]/.test(e.key) && e.key !== 'Backspace') {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>

                      <div>
                        <label>Rating:</label>
                        <select
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                          required
                          style={inputStyle}
                        >
                          <option value="">Select Rating</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div>
                        <textarea
                          placeholder="What should improve?"
                          value={improvement}
                          onChange={(e) => setImprovement(e.target.value)}
                          style={inputStyle}
                          required
                        ></textarea>
                      </div>
                      <button type="submit" style={{ ...submitButtonStyle, marginRight: '10px' }}>
                        Submit Feedback
                      </button>
                      <button type="button" onClick={() => setFeedbackVisible(prev => ({ ...prev, [index]: false }))} style={cancelButtonStyle}>
                        Cancel
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Appointments;



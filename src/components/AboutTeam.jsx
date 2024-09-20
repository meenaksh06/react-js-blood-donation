import React from 'react';
import Background from "../../src/assets/img/background.jpg";

const AboutTeam = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={Background} alt="About Community"
              style={{
                width: '100%', 
                height: '600px', 
                objectFit: 'cover', 
                borderRadius: '15px', 
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
              }}
            />
          </div>


          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3" style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                  fontFamily: "'Poppins', sans-serif"
                }}>
                  About Our Community
                </h2>

                <p className="lead fs-4" style={{
                  color: '#6c757d', // Slightly greyish color
                  fontSize: '1.25rem', // Adjusted font size for better readability
                  lineHeight: '1.6', // Increased line height for clarity
                  marginBottom: '20px', // Spacing below the paragraph
                  textAlign: 'justify', // Justified text for a neat look
                  padding: '15px', // Padding for some space around the text
                  borderLeft: '4px solid #e53e3e', // Left border for emphasis
                  backgroundColor: '#f8f9fa', // Light background color for contrast
                  borderRadius: '5px' // Rounded corners
                }}>
                  Blomo is a community-driven platform designed to bridge the gap between blood donors, hospitals, and blood donation banks.
                  Our mission is to make it easier for people to find blood donation camps in their area, and in urgent situations, connect users with nearby donors of the same blood group.
                  <br></br>Blomo aims to create a life-saving network that fosters community support and ensures timely access to blood donations when they are needed the most.
                </p>

                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <h1 className="centered-text" style={{
                    fontSize: '4rem',
                    fontWeight: '800',
                    textAlign: 'center',
                    lineHeight: '1.2',
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
                    fontFamily: "'Poppins', sans-serif",
                    marginBottom: '20px'
                  }}>
                    Be Saviour, Be Hero<br />Save Life!
                  </h1>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;

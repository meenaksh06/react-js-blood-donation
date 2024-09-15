import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Support Blomo
              </h6>
              <p>
              Support Blomo by becoming a blood donor and saving lives in your community. 
              Spread the word about our mission and help us connect those in urgent need with life-saving blood donations.<br/> Together, we can make a difference!
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                About Blomo
              </h6>
              <p>
                <a href="#!" className="text-reset">Learn More</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Blood Camps</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Emergency</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Donate</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">
                Join Our Community
              </h6>
              <p>
                <a href="#!" className="text-reset">Connect With Donors</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Healthy Life</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Save Lives</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Support
              </h6>
              <p>
                <a href="#!" className="text-reset">Stay Connected</a>
              </p>
              <p>
                <a href="#!" className="text-reset">FAQs</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Download App</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Terms & Conditions</a>
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="fw-bold" href="#">Blomo</a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;

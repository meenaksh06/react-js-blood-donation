import React from 'react';
import Background from "../../src/assets/img/background.jpg";

const AboutTeam = () => {
  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img className="img-fluid rounded" loading="lazy" src={Background} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">About Our Community</h2>
                <p className="lead fs-4 text-secondary mb-3">
                Blomo is a community-driven platform designed to bridge the gap between blood donors, hospitals, and blood donation banks. 
                Our mission is to make it easier for people to find blood donation camps in their area, and in urgent situations, connect users with nearby donors of the same blood group. 
                Blomo aims to create a life-saving network that fosters community support and ensures timely access to blood donations when they are needed the most.
                </p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <h1 className='centered-text'>Be Saviour, Be Hero<br/>Save Life!</h1>
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

import React from 'react';
import {Navbar,Footer, ContactInfo} from '../../components'

const ContactUs = () => {
  return (
    <div style={{background: '#eaeaea'}}>
      {/* Navbar */}
      <Navbar username="John Doe" contactUsColor={'primary'}/>

      {/* Main Content */}
      <ContactInfo />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;

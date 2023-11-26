import React, { useState, useEffect } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function Footer() {
  const apiUrl = import.meta.env.VITE_HOST || "https://aml-school.com";

  const [generalSettings, setGeneralSettings] = useState({
    site_name: '',
    phone: '',
    email: '',
    facebook: '',
    instagram: '',
    // Add other fields as needed
  });

  useEffect(() => {
    // Make a GET request to your Django API endpoint using Axios
    axios.get(`${apiUrl}/api/general-settings/`)
      .then(response => {
        setGeneralSettings(response.data);
      })
      .catch(error => {
        console.error('Error fetching general settings:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <MDBFooter className='footer text-center'>
      <MDBContainer className="container">
        {/* Social links section */}
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          {/* Your existing social links here */}
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href={generalSettings.facebook} className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href={generalSettings.twitter} className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href={generalSettings.google} className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href={generalSettings.instagram} className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href={generalSettings.linkedin} className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href={generalSettings.github} className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        {/* Footer content section */}
        <section>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              {/* Your existing content here */}
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  {generalSettings.site_name}
                </h6>
                <p>
                  {generalSettings.aboutSmall}
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Explore</h6>
                {/* Your existing explore links here */}
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    Home
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    About Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    Events
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    News
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    Privacy Policy
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                {/* Your existing useful links here */}
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    Online Courses
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    <i className="fa-solid fa-angles-right me-2"></i>
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                {/* Your existing contact information here */}
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  {generalSettings.address}
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  {generalSettings.email}
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> {generalSettings.phone}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Footer copyright section */}
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © {generalSettings.site_name} 2023 All rights reserved
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}


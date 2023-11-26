import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Logo() {
  const apiUrl = import.meta.env.VITE_HOST;

  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    // Make a GET request to your Django API endpoint using Axios
    axios.get(`${apiUrl}/api/general-settings`)
      .then(response => {
        // Assuming the API response contains the logo URL in a field called 'logo'
        // Prepend the base URL to the logo path
        setLogoUrl(`${apiUrl}${response.data.logo}`);
      })
      .catch(error => {
        console.error('Error fetching logo:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div className='logo'>
      {logoUrl && <a href="#"><img src={logoUrl} alt="School logo" /></a>}
    </div>
  );
}

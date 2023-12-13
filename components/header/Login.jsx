import React, { useState, useEffect } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Facebook from '/components/facebook';
import axios from 'axios';


export default function Login(props) {
  const [singUp, setSingUp] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  const [countries, setCountries] = useState([]);
  const apiUrl ="https://aml-school.com";
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [login , setLogin] = useState(localStorage.getItem('authToken'));
  const [userImgUrl, setUserImgUrl] = useState('');
  const [userName, setUserName] = useState('');


 
  
  
  const toggleSingUp = () => {
    setSingUp(!singUp);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/countries/`);
        // console.log(response);  // Log the entire response
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.error('Failed to fetch countries');
        }
      } catch (error) {
        console.error('An error occurred while fetching countries', error);
      }
    };

    fetchCountries();
  }, [apiUrl]);

  const toggleSweetAlert = (title, message, type) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setShowAlert(true);
    setSingUp(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const user = document.getElementById('user').value;
    const email = document.getElementById('emailsingup').value;
    const password = document.getElementById('passwordsingup').value;
    const countryElement = document.getElementById('country');
    const countryId = countryElement.options[countryElement.selectedIndex].value;

    let role_name = '';
    switch (user) {
      case '1':
        role_name = 'Student';
        break;
      case '2':
        role_name = 'Parent';
        break;
      case '3':
        role_name = 'Teacher';
        break;
      default:
        console.error('Invalid user role selected');
        return;
    }

    const validRoles = ['Student', 'Parent', 'Teacher'];
    if (!validRoles.includes(role_name)) {
      console.error('Invalid role selected');
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, user, email, password, role_name, country_id: countryId }),
      });
      console.log(response);  // Log the entire response
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toggleSweetAlert('Success', `You have registered as ${role_name} successfully.`, 'success');
        // Handle successful registration here
      } else {
        console.error('Registration failed');
        toggleSweetAlert('Error', 'Registration failed. Please try again.', 'error');
      }
    } catch (error) {
      console.error('An error occurred during registration', error);
      toggleSweetAlert('Error', 'An error occurred during registration. Please try again.', 'error');
      // Handle error or set an error message
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await axios.post(`${apiUrl}/api/login/`, { username, password });
  
      if (response.status === 200) {
        const data = response.data;
        console.log('Login successful', data);
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('userData', JSON.stringify(data));
        
        // Construct the full URL for the profile picture
        const fullImageUrl = apiUrl + data.profile_picture;
        const fullUserName =  data.username;
        localStorage.setItem('userImgUrl', fullImageUrl);
        localStorage.setItem('userName', fullUserName);
  
        setLogin(localStorage.getItem('authToken'));
        setUserImgUrl(fullImageUrl);
        if (fullUserName && typeof fullUserName === 'string') {
          setUserName(fullUserName.toLocaleUpperCase());
        } else {
          console.error('Invalid username');
        }
  
        toggleLoginForm();
        console.log(fullUserName);
        console.log(fullImageUrl);
      } else {
        console.error('Login failed');
        setLoginError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login failed', error);
      setLoginError('An error occurred during login.');
    }
  };
  
  
  useEffect(() => {
    // Check if the user is logged in by retrieving the authToken from localStorage
    const authToken = localStorage.getItem('authToken');
  
    if (authToken) {
      // User is logged in, retrieve user data and profile picture URL from localStorage
      const userData = JSON.parse(localStorage.getItem('userData'));
      const userImgUrl = localStorage.getItem('userImgUrl');
      const userName = localStorage.getItem('userName');
  
      // Set the user data and profile picture URL in the component state
      setLogin(authToken);
      setUserImgUrl(userImgUrl);
      if (userName && typeof userName === 'string') {
        setUserName(userName.toLocaleUpperCase());
      } else {
        console.error('Invalid username');
      }
      
    }
  
    // Fetch countries (your existing code for fetching countries)
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/countries/`);
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          console.error('Failed to fetch countries');
        }
      } catch (error) {
        console.error('An error occurred while fetching countries', error);
      }
    };
  
    // Call the fetchCountries function
    fetchCountries();
  }, [apiUrl]);
  const responseFacebook = async (response) => {
    try {
      // Destructure accessToken and userID from Facebook response
      const { accessToken, userID } = response;

      // Make a POST request to the Facebook login endpoint
      const res = await axios.post(`${apiUrl}/api/facebook-login/`, {
        access_token: accessToken,
        user_id: userID,
      }, {
        // Include CSRF token in the headers
        headers: {
          'X-CSRFToken': getCSRFToken(), // Implement getCSRFToken function to retrieve the CSRF token
        },
      });

      // Check the status of the response
      if (res.status === 200) {
        const data = res.data;
        // Handle successful social login
        handleSocialLogin(data);
      } else {
        console.error('Facebook login failed');
        setLoginError('Facebook login failed. Please try again.');
      }
    } catch (error) {
      console.error('Facebook login failed', error);
      setLoginError('An error occurred during Facebook login.');
    }
  };
  
  // Function to retrieve the CSRF token from cookies
  const getCSRFToken = () => {
    const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/);
    return csrfToken ? csrfToken[1] : '';
  };
  
  
  function SignUpForm() {
    return (
      <div className='login-contant container'>
        <form onSubmit={handleSignUp}>
          <div className="form-outline mb-4">
            <input type="text" id="username" className="form-control" name="username" />
            <label className="form-label" htmlFor="username">Name</label>
          </div>
          <div className="form-outline mb-4">
            <select className="form-select" aria-label="Type of user" id='user' name="role">
              <option value="1">Student</option>
              <option value="2">Parent</option>
              <option value="3">Teacher</option>
            </select>
            <label className="form-label" htmlFor="user">User</label>
          </div>
          <div className="form-outline mb-4">
            <select className="form-select" aria-label="Select your country" id='country' name="country">
              {countries.map(country => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))}
            </select>
            <label className="form-label" htmlFor="country">Country</label>
          </div>
          <div className="form-outline mb-4">
            <input type="email" id="emailsingup" className="form-control" />
            <label className="form-label" htmlFor="emailsingup">Email address</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="passwordsingup" className="form-control" />
            <label className="form-label" htmlFor="passwordsingup">Password</label>
          </div>
          <div className="d-flex justify-content-center flex-wrap  mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="Agree" />
                <label className="form-check-label" htmlFor="Agree"> I have read and agree to the terms </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn login-submit btn-primary btn-block mb-4">Sign up</button>
        </form>
        <Facebook />
        <div className="col login " onClick={toggleSingUp}>
          <a href="#!">Have you an account?</a>
        </div>
     
      </div>
    );
  }

  const toggleLoginForm = () => {
    setLoginForm(!loginForm);
    if (!loginForm) {
      document.documentElement.style.overflowY = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'scroll';
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setLogin(null);
    window.location.reload();
  };
  
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);

  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);

  };
  return (
    <div className={`login ${props.margin}`}>
       {props.header && login ? (
        // If user is logged in, render user menu
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            {userImgUrl && <Avatar alt={userName} src={userImgUrl}  />}
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Dashboard</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center" onClick={handleLogout}>Logout</Typography>
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <>
          <button type="button" className="btn" onClick={toggleLoginForm}>
            <i className={`${props.visible} fa-regular fa-user me-1`}></i>
            {props.title}
          </button>
          {loginForm && (
  <div className='login-model'>
    <div className='overlay d-flex justify-content-center align-items-center'>
      {singUp ? <SignUpForm /> :
        <div className='login-contant container'>
          <form onSubmit={handleLogin}>
            <div className="form-outline mb-4">
              <input type="text" id="username" className="form-control" name='username' />
              <label className="form-label" htmlFor="username">Email address</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control" />
              <label className="form-label" htmlFor="password">Password</label>
            </div>
            <div className="d-flex justify-content-center flex-wrap  mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="rememberme" />
                  <label className="form-check-label" htmlFor="rememberme"> Remember me </label>
                </div>
              </div>
              <div className="col forgot">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            <button type="submit" className="btn login-submit btn-primary btn-block mb-4">Sign in</button>
          </form>
          <div className="col singup">
            <a href="#!" onClick={toggleSingUp}>don't have an account</a>
          </div>
        </div>
      }
      <button className='close-model' onClick={toggleLoginForm}>
        <i className='fas fa-close'></i>
      </button>
    </div>
  </div>
)}
{showAlert && (
  <SweetAlert
    title={alertTitle}
    onConfirm={() => setShowAlert(false)}
    timeout={10000}
    type={alertType}
  >
    {alertMessage}
  </SweetAlert>
)}
        </>
      )}
    </div>
  );
  
}

//  import React ,{useState} from 'react'


//  export default function Login(props) {
//    const [singUp, setSingUp] = useState(false);
//    const [loginForm, setLoginForm] = useState(false);
//    const toggleSingUp=()=>{
//      setSingUp(!singUp)
//    }
//    function SingUp(){
//      return(
      
//          <div className='login-contant container container'>
//               <form>
//               <div className="form-outline mb-4">
//                    <input type="text" id="name" className="form-control" />
//                    <label className="form-label" for="name">Name</label>
//                  </div>
//                  <div className="form-outline mb-4">
//                     <select class="form-select" aria-label="Type of user"id='user'>
//                      <option selected>Guest</option>
//                      <option value="1">Student</option>
//                      <option value="2">Parent</option>
//                      <option value="3">Teacher</option>
//                     </select>
//                    <label className="form-label" for="user">User</label>
//                  </div>
//                  <div className="form-outline mb-4">
//                    <input type="email" id="emailsingup" className="form-control" />
//                    <label className="form-label" for="emailsingup">Email address</label>
//                  </div>
//                  <div className="form-outline mb-4">
//                     <input type="password" id="passwordsingup" className="form-control" />
//                     <label className="form-label" for="passwordsingup">Password</label>
//                  </div>
//                  <div className="d-flex justify-content-center flex-wrap  mb-4">
//                      <div className="col d-flex justify-content-center">
//                         <div className="form-check">
//                           <input className="form-check-input" type="checkbox" value="" id="Agree" />
//                           <label className="form-check-label" for="rememberme"> I have read and agree to the terms </label>
//                         </div>
//                      </div>
//                  </div>
//                  <button type="submit" className="btn login-submit btn-primary btn-block mb-4">Sign up</button>
//               </form>
//               <div className="col login " onClick={toggleSingUp}>
//                       <a href="#!">have you an account?</a>
//                      </div>
//          </div>
      
//      )
//    }
//    const toggleLoginForm =()=>{
//      setLoginForm(!loginForm);
//      if(!loginForm){
//        document.documentElement.style.overflowY = "hidden";
//      }
//      else{
//        document.documentElement.style.overflowY = "scroll";
//      }
//  }
//    return (
//      <div className={`login ${props.margin}`}>
//            <button type="button" className="btn" onClick={toggleLoginForm}>
//            <i className={`${props.visible} fa-regular  fa-user me-1`}></i>
//            {props.title}  
//            </button>
//          {loginForm && ( <div className='login-model'>
//          <div className='overlay d-flex justify-content-center align-items-center'>
//            {singUp ? SingUp() : 
//             <div className='login-contant container'>
//               <form>
//                  <div className="form-outline mb-4">
//                    <input type="email" id="email" className="form-control" name='email' />
//                    <label className="form-label" for="email">Email address</label>
//                  </div>
//                  <div className="form-outline mb-4">
//                     <input type="password" id="password" className="form-control" />
//                     <label className="form-label" for="password">Password</label>
//                  </div>
//                  <div className="d-flex justify-content-center flex-wrap  mb-4">
//                      <div className="col d-flex justify-content-center">
//                         <div className="form-check">
//                           <input className="form-check-input" type="checkbox" value="" id="rememberme" />
//                           <label className="form-check-label" for="rememberme"> Remember me </label>
//                         </div>
//                      </div>
//                      <div className="col forgot">
//                       <a href="#!">Forgot password?</a>
//                      </div>
//                  </div>
//                  <button type="submit" className="btn login-submit btn-primary btn-block mb-4">Sign in</button>
//               </form>
//               <div className="col singup">
//                       <a href="#!" onClick={toggleSingUp}>don't have an account</a>
//                      </div>
//              </div> }
           
//              <button className='close-model'onClick={toggleLoginForm}>
//                 <i className="fas fa-close"></i>
//              </button>
//          </div>    
//          </div>)}
//         </div>
//    )
//  }



import React, { useState } from 'react';

export default function Login(props) {
  const [singUp, setSingUp] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [loginError, setLoginError] = useState(null); // Add state for login error
  const [registrationError, setRegistrationError] = useState(null); // Add state for
  const toggleSingUp = () => {
    setSingUp(!singUp);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const user = document.getElementById('user').value;
    console.log('Name:', name);
console.log('User:', user);
    const email = document.getElementById('emailsingup').value;
    const password = document.getElementById('passwordsingup').value;
    let role = '';
    switch (user) {
      case '1':
        role = 'Student';
        break;
      case '2':
        role = 'Parent';
        break;
      case '3':
        role = 'Teacher';
        break;
      
    }
    const response = await fetch('http://aml-school.com/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, user, email, password ,role}),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);  //Handle successful registration here
    } else {
      console.error('Registration failed');
    }
  };
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const username  = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('http://aml-school.com/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username , password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);

        // Handle successful login here, e.g., save the token to local storage
      } else {
        console.error('Login failed');
        const errorResponse = await response.text();
        console.log('Error Response:', errorResponse);
        setLoginError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login failed', error);

      // Handle error, set an error message, or do something else as needed
      setLoginError('An error occurred during login.');
    }
  };

  
  
  function SingUp() {
    return (
      <div className='login-contant container container'>
        <form onSubmit={handleSignUp}>
          <div className="form-outline mb-4">
          <input type="text" id="username" className="form-control" name="username" />
            <label className="form-label" htmlFor="username">Name</label>
          </div>
          <div className="form-outline mb-4">
            <select className="form-select" aria-label="Type of user" id='user' name="role">
                 {/* <option selected>Guest</option> */}

              <option value="1">Student</option>
              <option value="2">Parent</option>
              <option value="3">Teacher</option>
            </select>
            <label className="form-label" htmlFor="user">User</label>
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
        <div className="col login " onClick={toggleSingUp}>
          <a href="#!">Have you an account?</a>
        </div>
      </div>
    );
  }

  //... Previous part of the component ...

 const toggleLoginForm = () => {
  setLoginForm(!loginForm);
  if (!loginForm) {
    document.documentElement.style.overflowY = 'hidden';
  } else {
    document.documentElement.style.overflowY = 'scroll';
  }
};

return (
  <div className={`login ${props.margin}`}>
    <button type="button" className="btn" onClick={toggleLoginForm}>
      <i className={`${props.visible} fa-regular fa-user me-1`}></i>
      {props.title}
    </button>
    {loginForm && (
      <div className='login-model'>
        <div className='overlay d-flex justify-content-center align-items-center'>
          {singUp ? SingUp() : 
           <div className='login-contant container'>
                         <form onSubmit={handleLogin}>
                            <div className="form-outline mb-4">
                            <input type="email" id="username" className="form-control" name='username' />
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
  </div>
);
}

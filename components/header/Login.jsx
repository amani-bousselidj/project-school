import React ,{useState} from 'react'


export default function Login(props) {
  const [singUp, setSingUp] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const toggleSingUp=()=>{
    setSingUp(!singUp)
  }
  function SingUp(){
    return(
      
        <div className='login-contant container container'>
             <form>
             <div className="form-outline mb-4">
                  <input type="text" id="name" className="form-control" />
                  <label className="form-label" for="name">Name</label>
                </div>
                <div className="form-outline mb-4">
                   <select class="form-select" aria-label="Type of user"id='user'>
                    <option selected>Guest</option>
                    <option value="1">Student</option>
                    <option value="2">Parent</option>
                    <option value="3">Teacher</option>
                   </select>
                  <label className="form-label" for="user">User</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="email" id="emailsingup" className="form-control" />
                  <label className="form-label" for="emailsingup">Email address</label>
                </div>
                <div className="form-outline mb-4">
                   <input type="password" id="passwordsingup" className="form-control" />
                   <label className="form-label" for="passwordsingup">Password</label>
                </div>
                <div className="d-flex justify-content-center flex-wrap  mb-4">
                    <div className="col d-flex justify-content-center">
                       <div className="form-check">
                         <input className="form-check-input" type="checkbox" value="" id="Agree" />
                         <label className="form-check-label" for="rememberme"> I have read and agree to the terms </label>
                       </div>
                    </div>
                </div>
                <button type="submit" className="btn login-submit btn-primary btn-block mb-4">Sign up</button>
             </form>
             <div className="col login " onClick={toggleSingUp}>
                     <a href="#!">have you an account?</a>
                    </div>
        </div>
      
    )
  }
  const toggleLoginForm =()=>{
    setLoginForm(!loginForm);
    if(!loginForm){
      document.documentElement.style.overflowY = "hidden";
    }
    else{
      document.documentElement.style.overflowY = "scroll";
    }
}
  return (
    <div className={`login ${props.margin}`}>
          <button type="button" className="btn" onClick={toggleLoginForm}>
          <i className={`${props.visible} fa-regular  fa-user me-1`}></i>
          {props.title}  
          </button>
        {loginForm && ( <div className='login-model'>
        <div className='overlay d-flex justify-content-center align-items-center'>
          {singUp ? SingUp() : 
           <div className='login-contant container'>
             <form>
                <div className="form-outline mb-4">
                  <input type="email" id="email" className="form-control" name='email' />
                  <label className="form-label" for="email">Email address</label>
                </div>
                <div className="form-outline mb-4">
                   <input type="password" id="password" className="form-control" />
                   <label className="form-label" for="password">Password</label>
                </div>
                <div className="d-flex justify-content-center flex-wrap  mb-4">
                    <div className="col d-flex justify-content-center">
                       <div className="form-check">
                         <input className="form-check-input" type="checkbox" value="" id="rememberme" />
                         <label className="form-check-label" for="rememberme"> Remember me </label>
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
            </div> }
           
            <button className='close-model'onClick={toggleLoginForm}>
               <i className="fas fa-close"></i>
            </button>
        </div>    
        </div>)}
       </div>
  )
}

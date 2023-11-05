import React  ,{useState} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavbarState } from './NavbarState';
import Logo from './Logo';
export default function SideBar() {
    const navbar = useNavbarState();
    const [sidebar, setSidebar] = useState(false);
const toggleSidebar =()=>{
    setSidebar(!sidebar)
    if(!sidebar){
      document.body.style.overflowY ="hidden";
  }
  else{
      document.body.style.overflowY ="scroll";

  }
}
  return (
    <div className={`sidebar ${navbar ? '' : 'hiding'}`}>  
         <button type="button" className="btn" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
        </button>
        {sidebar && ( 
         <div className='overlay d-flex justify-content-start'>
            <div className='sidebar-contant vh-100 overflow-y-scroll'>
             <div className='w-100 border-btm p-4'>
                 <Logo />
            </div>
            <ul className='nav navbar flex-column align-items-start'>
                      <li className='border-btm'><a  className='nav-item'><Link to="/project-school/">Home</Link></a></li>
                      <li className='border-btm'><a  className='nav-item'><Link to="/project-school/online_course">Online Course</Link></a></li>
                      <li className='border-btm'><a  className='nav-item '>Online Admission</a></li>
                      <li className='border-btm'><a  className='nav-item '>About Us</a></li>
                      <li className='nav-item dropdown border-btm'>
                        <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Academics
                         </a>
                        <div className='dropdown-menu' aria-labelledby="navbarDropdown">
                          <a className='dropdown-item border-btm'>Facilities</a>
                          <a className='dropdown-item border-btm'>Course</a>
                          <a className='dropdown-item border-btm'>School Uniform</a>
                          <a className='dropdown-item border-btm'>Principal Message</a>
                          <a className='dropdown-item border-btm'>School Management</a>
                          <a className='dropdown-item border-btm'>Know Us</a>
                          <a className='dropdown-item border-btm'>Approch</a>
                          <a className='dropdown-item border-btm'>Pre Primary</a>
                          <a className='dropdown-item border-btm'>Teacher</a>
                          <a className='dropdown-item border-btm'>Houses & Mentoring</a>
                          <a className='dropdown-item border-btm'>Student Council</a>
                          <a className='dropdown-item border-btm'>Career Counselling</a>
                        </div>
                      </li>
                      <li className='border-btm'><a  className='nav-item '>Gallery</a></li>
                      <li className='border-btm'><a  className='nav-item '>Events</a></li>
                      <li className='border-btm'><a  className='nav-item '>News</a></li>
                      <li ><a  className='nav-item'>Contect</a></li>
                 </ul>
                 <button className='close-model'onClick={toggleSidebar}>
               <i className="fas fa-close"></i>
            </button>
            </div>
        </div>    
        )}
    </div>
  )
}
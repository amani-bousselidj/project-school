import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavbarState } from './NavbarState';
export const Navigation = () => {
    const navbar = useNavbarState();
  return (
    <div className={`navigation ${navbar ? 'hiding' : ''}`}>
    <ul className='nav navbar justify-content-between'>
    
        <li><a  className='nav-item'><Link to="/project-school/">Home</Link></a></li>
        <li><a  className='nav-item'><Link to="/project-school/online_course">Online Course</Link></a></li>
        <li><a  className='nav-item'>Online Admission</a></li>
        <li><a  className='nav-item'>About Us</a></li>
        <li className='nav-item dropdown'>
            <a className="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Academics
             </a>
          <div className='dropdown-menu' aria-labelledby="navbarDropdown">
              <a className='dropdown-item'>Facilities</a>
              <a className='dropdown-item'>Course</a>
              <a className='dropdown-item'>School Uniform</a>
              <a className='dropdown-item'>Principal Message</a>
              <a className='dropdown-item'>School Management</a>
              <a className='dropdown-item'>Know Us</a>
              <a className='dropdown-item'>Approch</a>
              <a className='dropdown-item'>Pre Primary</a>
              <a className='dropdown-item'>Teacher</a>
              <a className='dropdown-item'>Houses & Mentoring</a>
              <a className='dropdown-item'>Student Council</a>
              <a className='dropdown-item'>Career Counselling</a>
           </div>
        </li>
        <li><a  className='nav-item'>Gallery</a></li>
        <li><a  className='nav-item'>Events</a></li>
        <li><a  className='nav-item'>News</a></li>
        <li><a  className='nav-item'>Contect</a></li>
    </ul>
    </div>
  )
}

import React from 'react'
import Login from '../header/Login'
export default function Cour(props) {
  return (
    <div className=' col-lg-3 col-md-6 col-sm-6  col-12 p-2'>
         <div className='cour'>
        <img src={`${props.url}`} alt={`${props.name}`} />
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <Login visible="hiding" title="Apply Now" />
    </div>
    </div>
   
  )
}

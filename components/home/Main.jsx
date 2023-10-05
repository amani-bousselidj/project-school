import React from 'react'
import Login from '../header/Login'
export default function Main() {
  return (
    <div className='main  '>
        <div className='container ps-0 pe-0'>
            <div className=' text-start row-cols-lg-2 row-cols-md-1 d-flex flex-column gap-3'>
            <span>BETTER LEARNING FUTURE WITH US</span>
            <h1>Committed To Learn Excellence In Education</h1>
            <p>It is long established that a reader will be distracted by the readable popular and best content.</p>
            <Login title ="Get Started Today" visible='hiding' margin="ms-0" />
            </div>
        </div>
    </div>
  )
}

import React  from 'react'
import Courses from './Courses'
import Filter from './Filter'
export default function FliterResult(props) {
return (
    <div className='d-flex flex-lg-nowrap flex-md-nowrap flex-sm-wrap'>
      {props.state && ( 
      <Filter  />)}
      <Courses />
    </div>
  )
}

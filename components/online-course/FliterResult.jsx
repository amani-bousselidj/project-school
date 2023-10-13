import React  from 'react'
import Courses from './Courses'
import Filter from './Filter'
export default function FliterResult(props) {
return (
    <div className='filter-result d-flex flex-lg-nowrap flex-md-nowrap flex-sm-wrap'>
      <Filter  hide ={props.state} />
      <Courses />
    </div>
  )
}

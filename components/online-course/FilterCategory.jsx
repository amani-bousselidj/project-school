import React from 'react'
import Courses from './Courses';
export default function FilterCategory(props) {
  const handlesetPrecours = () => {
    Courses.setPrecours(`${props.name}`);  
    
  };
  const handleremovePrecours = () => {
    Courses.removePrecours(`${props.name}`);  
  };
  return (
    <div class="filter-category form-check">
        <input type="checkbox" class="form-check-input" id={`${props.name}`}    onChange={(event) => {
   if (event.target.checked) {
    handlesetPrecours();
  } else {
   handleremovePrecours();
  }
  }}/>
        <label class="form-check-label" for={`${props.name}`}> {props.name}</label>
    </div>
  )
}
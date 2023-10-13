import React from 'react'
import Courses from './Courses';

export default function FilterPrice(props) {
    const handlesetPriceCours = () => {
        Courses.setPriceCours(`${props.name}`);  
        
      };
      const handleremovePriceCours= () => {
        Courses.removePriceCours(`${props.name}`);  
      };
  return (
    <div>
          <div class="filter-category form-check">
        <input type="checkbox" class="form-check-input" id={`${props.name}`}
        onChange={(event) => {
            if (event.target.checked) {
                handlesetPriceCours();
           } else {
              handleremovePriceCours();
           }
           }}/>
        <label class="form-check-label" for={`${props.name}`}> {props.name}</label>
    </div>
    </div>
  )
}

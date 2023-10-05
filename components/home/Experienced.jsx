import React from 'react'
import Staff from './Staff'
import img1 from '../../src/assets/teacher1.jpg'
import img2 from '../../src/assets/teacher2.jpg'
import img3 from '../../src/assets/teacher3.jpg'
import img4 from '../../src/assets/teacher4.jpg'
export default function Experienced() {
  return (
    <div className='experienced container '>
        <h1>OUR EXPERIENCED STAFFS</h1>
        <p>Considering desire as primary motivation for the generation of narratives is a useful concept.</p>
        <div className="row justify-content-lg-start justify-content-md-start justify-content-sm-center">
        <Staff profiel={img1} name='Amani Bousseldj' post='Math'/>
        <Staff profiel={img2} name='Amani Bousseldj' post='Math'/>
        <Staff profiel={img3} name='Amani Bousseldj' post='Math'/>
        <Staff profiel={img4} name='Amani Bousseldj' post='Math'/>
        </div>
    </div>
  )
}

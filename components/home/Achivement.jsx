import React from 'react'
import achivement from '../../src/assets/achivement.jpg'
import Counterup from './Counterup'
import img1 from '../../src/assets/about-image-01.png'
import img2 from '../../src/assets/about-image-02.png'
import img3 from '../../src/assets/about-image-03.png'
import img4 from '../../src/assets/about-image-04.png'
export default function Achivement() {
  return (
    <div className='achivement '>
        <div className="container ">
          <div className="row">
          <div className="col-lg-6 col-md-12">
              <h1>ACHEIVEMENTS</h1>
              <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart like mine.</p>
              <img src={`${achivement}`} alt="" className='achivement-img' />
            </div>
            <div className="col-lg-6 col-md-12 row g-4 pr--75 ">
              <Counterup img={img1} counter='236' title='Learners & counting' />
              <Counterup img={img2}  counter='456' title='Courses & Video' />
              <Counterup img={img3}  counter='188' title='Certified Students' />
              <Counterup img={img4}  counter='156' title='Winning Award' />
            </div>
         </div>
       </div>
    </div>
  )
}

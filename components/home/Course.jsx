import React from 'react'
import Cour from './Cour'
import img1 from '../../src/assets/courseimg1.jpg'
import img2 from '../../src/assets/courseimg2.jpg'
import img3 from '../../src/assets/courseimg3.jpg'
import img4 from '../../src/assets/courseimg4.jpg'
export default function Course() {
  return (
    <div className='course container '>
        <h6>OUR MAIN COURSES</h6>
        <h1>Popular Topics To Learn</h1>
        <div className='d-flex flex-row flex-wrap'>
            <Cour url={img1} name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url={img2} name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/> 
            <Cour url={img3} name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url={img4} name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url={img4}  name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url={img4}  name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
            <Cour url={img4}  name='phisic' title='phisic' desc='it amet consectetur adipisicing elit. Vitae voluptate consectetur dolorum nam'/>
        </div>
    </div>
  )
}

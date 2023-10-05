import React from 'react'
import img1 from '../../src/assets/teacher-young-student-having-good-time.jpg'
import img2 from '../../src/assets/senior-man-purple-shirt-holding-blank-pages-looking-confused-having-doubts-standing-blue.jpg'
import img3 from '../../src/assets/happy-college-student-carries-papers-notepad-prepares-exams-drinks-hot-beverage-from-cup.jpg'
export default function AboutUs() {
  return (
    <div className='about-us'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12  row align-items-end images ">
                    <div className="col-lg-5 col-md-6">
                    <img  className=' gallery-image'src={`${img2}`} alt="" />
                    </div>
                    <div className="col-lg-7 col-md-6 mt-4">
                    <img   className=' gallery-image'src={`${img3}`} alt="" />
                    </div>
                    <div className="col-lg-12 mt-4">
                    <img className=' gallery-image gallery-image-3 text-center' src={`${img1}`} alt="" />
                    </div>
                    <div className="total-student row align-items-center">
                        <i className="fa-regular fa-face-smile col-3"></i>
                        <div className='col-8 col'>
                        <span className='row-cols-3'>900</span>
                        <h6 className='row-cols-3'>Total student</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 content ">
                    <span className='p-0'>
                      ABOUT US
                    </span>
                    <h1>
                    Creating A Community Of Life Long Learners
                    </h1>
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel  risus, morbi pharetra. Facilisi sit miam mauris non iaculis elit fusce amet nunc in odio molestie.
                   </p>
                </div>
            </div>
        </div>
    </div>
  )
}

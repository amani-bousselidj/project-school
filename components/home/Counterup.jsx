import React from 'react'

export default function Counterup(props) {
  return (
    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
 <div className='edu-counterup '>
        <div className="inner">
            <div className="icon mb-3">
            <img src={props.img} alt="" />
            </div>
        </div>
        <div className="content">
            <h3 className="counter">
                    {props.counter}
            </h3>
            <span>{props.title}</span>
        </div>
    </div>
    </div>
   
  )
}

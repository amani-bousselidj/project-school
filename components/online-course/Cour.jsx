import React from 'react'

export default function Cour(props) {
  return (
         <div className='col-lg-4 col-md-6 col-sm-6  col-12 p-2 '>
          <div className=" cour ">
          <img src={`${props.url}`} alt={`${props.title}`} />
             <div className="content">
             <h3>{props.title}</h3>
             <p>{props.desc}</p>
             <div className='category-course'>
             Category : <span>{props.category}</span>
             </div>
             <div className='lesson-course'>
             <i class="fa-solid fa-circle-play"></i>  <span>{props.lesson} Lesson</span>
             </div>
             <div className="rating-sales d-flex justify-content-between align-items-center">
             <div className='rating-course'>
             <i className="fa-solid fa-star"
             style={{color :"#ffda24"}}
             ></i><span>{props.rating}</span>
             </div>
             <div className='sales-course'>
                <span>{props.sales} Sales</span>
             </div>
             </div>
             <div className="price-cart d-flex justify-content-between align-items-center">
                <div className='price-course'>
                  <span>${props.price}</span>
                </div>
                <button type="button" className="btn">
                <i class="fa-solid fa-cart-shopping"></i>
                    Add to cart
                 </button>
             </div>
             </div>
          </div>
         </div>
  )
}

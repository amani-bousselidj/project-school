import React from 'react'
import FilterCategory from './FilterCategory'
export default function Filter(props) {
const state = props.state;
  return (
    <div className='fliter accordion col-lg-3 col-md-3 col-sm-12'>
        <div className="filter-list accordion-item">
          <h2 className="accordion-header" id="headingCategory">
            <div className="sidecourse-title">
                <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#category"  aria-expanded="false" aria-controls="category">Category</button>
            </div>
           </h2>
            <div id="category" className="accordion-collapse collapse show catefilterscroll" aria-labelledby="headingCategory">
              <div className="accordion-body">
                <FilterCategory name="Personal Development" />
                <FilterCategory name="Lifestyle course" />
                <FilterCategory name="Network & Security Course" />
                <FilterCategory name="Business Marketing" />
                <FilterCategory name="Health & Fitness Courses" />
              </div>
            </div>
        </div>
        <div className="filter-list accordion-item">
          <h2 className="accordion-header" id="headingSearch">
            <div className="sidecourse-title">
                <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#Search"  aria-expanded="false" aria-controls="Search">Search By Course</button>
            </div>
           </h2>
            <div id="Search" className="accordion-collapse collapse show catefilterscroll" aria-labelledby="headingSearch">
              <div className="accordion-body">
              <form className="form-outline search-filter" >
                <input id='searchFilter' className="form-control" type="text" placeholder='Enter Keyword'  />
                <label className="form-label" for="searchFilter"></label>
                <button type="submit" className='btn'><i className='fas fa-search'></i></button>
                 </form>
              </div>
            </div>
        </div>
         <div className="filter-list accordion-item">
          <h2 className="accordion-header" id="headingPrice">
            <div className="sidecourse-title">
                <button className='accordion-button' data-bs-toggle="collapse" data-bs-target="#Price"  aria-expanded="false" aria-controls="Price">Price</button>
            </div>
           </h2>
            <div id="Price" className="accordion-collapse collapse show catefilterscroll" aria-labelledby="headingPrice">
              <div className="accordion-body">
                <FilterCategory name="Free" />
                <FilterCategory name="Paid" />
              </div>
            </div>
        </div> 
    </div>
  )
}


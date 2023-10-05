import React ,{useState}from 'react'
import Courses from './Courses';

export default function Refineheader({TableState }) {
    const [activeSort, setActiveSort] = useState(''); 
    const [FilterTable, setFilterTable] = useState(true);
    const handleSortCoursesBySales = () => {
        Courses.sortCoursesBySales(); 
        setActiveSort('sales'); 
      };
      const handleSortCoursesByDate = () => {
        Courses.sortCoursesByDate(); 
        setActiveSort('date');
      };
      const handleSortCoursesByRating = () => {
        Courses.sortCoursesByRating(); 
        setActiveSort('rating');
      };
      const handleSortCoursesByPrice = () => {
        Courses.sortCoursesByPrice();
        setActiveSort('price');  
      };
    const toggleFilterTable=()=>{
     setFilterTable(!FilterTable)
     TableState(FilterTable);  
        }
  return (
    <div className='col-md-12'>
            <div className="refineheader">
                <div className="row mb-5">
                    <div className="col-12 d-flex justify-content-between mb-3">
                            <div>
                                <button className="filter-refine" onClick={toggleFilterTable} >
                                     <i class="fa-solid fa-filter"></i>
                                     Filter & Refine
                                </button>
                            </div>
                         <button className='reset'onClick={() => window.location.reload()} >
                         <i class="fa-solid fa-arrows-rotate"></i>
                         Reset
                         </button>
                    </div>
                    <div className="col-12 d-flex justify-content-end gap-2">
                        <button className={`best-seller ${activeSort === 'sales' ? 'active' : ''}`}  onClick={handleSortCoursesBySales} >
                            Best Seller
                        </button>

                        <button className={`newest ${activeSort === 'date' ? 'active' : ''}`} onClick={handleSortCoursesByDate}>Newest</button>
                        <button className={`best-rated ${activeSort === 'rating' ? 'active' : ''}`} onClick={handleSortCoursesByRating}>Best Rated</button>
                        <button className={`price ${activeSort === 'price' ? 'active' : ''}`} onClick={handleSortCoursesByPrice}>
                        <i class="fa-solid fa-arrow-right-arrow-left fa-rotate-90"></i>
                            Price
                        </button>
                        <button className='cart'>
                        <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

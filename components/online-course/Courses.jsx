import { set } from 'date-fns';
import React, { useState , useEffect } from 'react';
import { useCart } from './CartContext';
import Cour from './Cour';
import courseData from './CourseData';
import Refineheader from './Refineheader';

export default function Courses() {
  const { toggleCourseInCart, isCourseInCart } = useCart();
  const [precours, setPrecours] = useState([]);
  const [priceCours,setPriceCours] = useState([]);
  const [filterPriceCourses,setFilterPriceCourse] = useState([]);
  
  
  Courses.setPriceCours =(PriceToFilter) => {
    const updatedPricecours = [...priceCours , PriceToFilter];
    setPriceCours(updatedPricecours)
  }
  Courses.removePriceCours =(PriceToRemove) => {
    const updatedPricecours = priceCours.filter(price => price !== PriceToRemove);
    setPriceCours(updatedPricecours);
  }
  Courses.setPrecours = (categoryToFilter) => {
    const updatedPrecours = [...precours, categoryToFilter];
    setPrecours(updatedPrecours);
  }

  Courses.removePrecours = (categoryToRemove) => {
    const updatedPrecours = precours.filter(category => category !== categoryToRemove);
    setPrecours(updatedPrecours);
  }

  useEffect(() => {
    if (priceCours == '' ) {
      setFilterPriceCourse(courseData);
    } else {
      const filter = courseData.filter((course) => course.price == "free" );
      setFilterPriceCourse(filter);
    }
  }, [courseData, priceCours]);

  useEffect(() => {
    if (precours.length === 0) {
      setFilteredCourses(filterPriceCourses);
    } else {
      const filter = filterPriceCourses.filter(course => precours.includes(course.category));
      setFilteredCourses(filter);
    }
  }, [filterPriceCourses, precours]);

 

  const [filterSearch,setFilterSearch] = useState('');
  Courses.setFilterSearch =(inputValue) =>{
    setFilterSearch(inputValue)
  }
  const [filterSearchCourses,setFilterSearchCourse] = useState([]);


useEffect(()=>{
  if(filterSearch ==''){
    setFilterSearchCourse(courseData);
  }
  else{
    const filteredCourses = courseData.filter((course) =>
    course.title.toLowerCase().includes(filterSearch.toLowerCase()) ||
    course.desc.toLowerCase().includes(filterSearch.toLowerCase())||
    course.category.toLowerCase().includes(filterSearch.toLowerCase())
  );
  setFilterSearchCourse(filteredCourses)
  }
} , [courseData,filterSearch]); 



const [filteredCourses, setFilteredCourses] = useState([]);

const [courses, setCourses] = useState([]);

  useEffect(() => {
    if( filterSearch == ""){
      setCourses(filteredCourses);

    }
    else{
      setCourses(filterSearchCourses);
    }
    
  }, [filteredCourses , filterSearchCourses]);

  const [sortOrder, setSortOrder] = useState('desc');
  Courses.sortCoursesBySales = () => {
    const sortedCourses = [...courses];
    sortedCourses.sort((a, b) => b.sales - a.sales);
    setCourses(sortedCourses);
  };
  Courses.sortCoursesByDate = () => {
    const sortedCourses = [...courses];
    sortedCourses.sort((a, b) => new Date(b.date) - new Date(a.date));
    setCourses(sortedCourses);
  };
  Courses.sortCoursesByRating = () => {
    const sortedCourses = [...courses];
    sortedCourses.sort((a, b) => b.rating - a.rating);
    setCourses(sortedCourses);
  };

   Courses.sortCoursesByPrice = () => {
    const sortedCourses = [...courses];
    if (sortOrder === 'desc') {
      sortedCourses.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      setSortOrder('asc'); 
    } else {
      sortedCourses.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setSortOrder('desc'); 
    }
    setCourses(sortedCourses);
  };

  return (
    <div className='courses '>
      <div className="d-flex flex-wrap flex-row">
        {courses.map((precourses, index) => (
          <Cour
            key={index}
            url={precourses.url}
            title={precourses.title}
            desc={precourses.desc}
            category={precourses.category}
            lesson={precourses.lesson}
            rating={precourses.rating}
            sales={precourses.sales}
            price={precourses.price}
            data={precourses.date}
            addToCart={() => toggleCourseInCart(precourses)}
            isInCart={isCourseInCart(precourses)} 
            teacher ={precourses.teacher}
          />
        ))}
      </div>
    </div>
  );
}


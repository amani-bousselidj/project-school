import React, { useState } from 'react';
import Cour from './Cour';
import courseData from './CourseData';
export default function Courses() {
  const [courses, setCourses] = useState(courseData);
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
        {courses.map((course, index) => (
          <Cour
            key={index}
            url={course.url}
            title={course.title}
            desc={course.desc}
            category={course.category}
            lesson={course.lesson}
            rating={course.rating}
            sales={course.sales}
            price={course.price}
            data={course.date}
          />
        ))}
      </div>
    </div>
  );
}

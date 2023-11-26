import React, { useState, useEffect } from 'react';
import Staff from './Staff';

export default function Experienced() {
  const [teachers, setTeachers] = useState([]);
  const apiUrl = import.meta.env.VITE_HOST;

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/teachers/`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    fetchTeachers();
  }, []); // The empty dependency array ensures the effect runs only once on component mount

  return (
    <div className='experienced container'>
      <h1>OUR EXPERIENCED STAFFS</h1>
      <p>Considering desire as the primary motivation for the generation of narratives is a useful concept.</p>
      <div className="row justify-content-lg-start justify-content-md-start justify-content-sm-center">
        {teachers.map(teacher => (
          <Staff key={teacher.id} profile={teacher.user.profile_picture} name={teacher.user.username} post={teacher.designation_faculty} />
        ))}
      </div>
    </div>
  );
}

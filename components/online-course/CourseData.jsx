// courseData.js

import img1 from '../../src/assets/courseimg3.jpg';
import img2 from '../../src/assets/courseimg4.jpg';
import img3 from '../../src/assets/courseimg1.jpg';
import { format } from 'date-fns';
const courseData = [
  {
    id: 1,
    url: img2,
    title: 'Front End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Network & Security Course',
    lesson: 3,
    rating: 2.5,
    sales: 6,
    price: 23.00, 
    date: format(new Date(2025, 9, 5), 'MM/dd/yyyy'),
    teacher :'Hamid merhi'

  },
  {
    id: 2,
    url: img3,
    title: 'Introduction to Machine Learning',
    desc: 'Explore the fundamentals of machine learning...',
    category: 'Artificial Intelligence',
    lesson: 5,
    rating: 4.2,
    sales: 75,
    price: 'free',
    date: '11/20/2021',
    teacher :'Hamid merhi'

  },
  {
    id: 3,
    url: img3,
    title: 'Graphic Design Essentials',
    desc: 'Master the art of graphic design...',
    category: 'Design & Creativity',
    lesson: 8,
    rating: 4.9,
    sales: 90,
    price: '79.99',
    date: '08/10/2022',
    teacher :'Hamid merhi'

  },
  {
    id: 4,
    url: img1,
    title: 'Back End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Personal Development',
    lesson: 3,
    rating: 4.5,
    sales: 119,
    price: 'free',
    date: format(new Date(2022, 1, 5), 'MM/dd/yyyy'),
    teacher :'Hamid merhi'

  },
  {
    id: 5,
    url: img3,
    title: 'iOS App Development with Swift',
    desc: 'Learn how to create iOS apps using Swift...',
    category: 'Mobile App Development',
    lesson: 10,
    rating: 4.6,
    sales: 85,
    price: '59.99',
    date: '04/30/2022',
    teacher :'Hamid merhi'
  }
];


export default courseData;

// courseData.js

import img1 from '../../src/assets/courseimg3.jpg';
import img2 from '../../src/assets/courseimg4.jpg';
import img3 from '../../src/assets/courseimg1.jpg';
import { format } from 'date-fns';
const courseData = [
  {
    url: img2,
    title: 'Front End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Network & Security Course',
    lesson: '3',
    rating: 2.5,
    sales: '6',
    price: 23.00, 
    date: format(new Date(2025, 9, 5), 'MM/dd/yyyy'),
  },
  {
    url: img3,
    title: 'Back End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Network & Security Course',
    lesson: 5,
    rating: 2.5,
    sales: 1000,
    price: 23.00,
    date: format(new Date(2022, 9, 5), 'MM/dd/yyyy'),

  },
  {
    url: img1,
    title: 'Back End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Network & Security Course',
    lesson: 3,
    rating: 5,
    sales: 15,
    price: 2.00,
    date: format(new Date(2021, 4, 5), 'MM/dd/yyyy'),

  },  {
    url: img1,
    title: 'Back End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Network & Security Course',
    lesson: 3,
    rating: 4.5,
    sales: 119,
    price: 2123.00,
    date: format(new Date(2022, 1, 5), 'MM/dd/yyyy'),

  },  {
    url: img1,
    title: 'Back End Development',
    desc: 'Lorem ipsum dolor...',
    category: 'Network & Security Course',
    lesson: 3,
    rating: 5,
    sales: 6,
    price: 23.00,
    date: format(new Date(2022, 9, 12), 'MM/dd/yyyy'),
  },
];

export default courseData;

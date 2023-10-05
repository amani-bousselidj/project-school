import React from 'react'
import Course from './Course'
import Main from './Main'
import AboutUs from './AboutUs'
import Achivement from './Achivement'
import Experienced from './Experienced'
export default function Home() {
  return (
    <div className='home'>
      <Main />
      <Course />
      <AboutUs />
      <Achivement />
      <Experienced  />
    </div>
  )
}

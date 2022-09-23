import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
      </div>
    </div>

  )
}

export default About
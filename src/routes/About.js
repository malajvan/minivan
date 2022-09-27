import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop:'50px',paddingLeft:'90px'}}>
          <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
        </div>
      <Footer />
    </div>

  )
}

export default About
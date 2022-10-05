import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Picture from '../Resources/about_pic.jpg'

const About = () => {
  return (
    <div>

      <Navbar />
      <div style={{paddingTop:'90px',paddingLeft:"90px", color:"#fff",fontSize:'2.1rem',fontWeight:'900'}}>
          About Me
       </div> 
      <div style={{position: 'absolute', paddingTop:'25px',paddingLeft:"90px",paddingRight:'700px', color:"#dddaff",fontSize:'1rem',fontWeight:'200'}}> 
        Aside from being a Math & Computer Science student at McGill, I'm also an avid musician and music lover. I believe this fact is made obvious if you have had the time to look over my personal projects.
         I'm also a Software Developer at McGill's DDMAL lab, responsible for maintaining and developing the backend of
        a workflow management system for musicologists. 
         <p>If you are interested in my music, feel free to visit my youtube channel or the music page of this website.</p>
        <p> Currently listening to: I'm In The Mood For Love by Julie London</p>
        </div>
        <div style={{position:'absolute',paddingLeft:'900px', paddingTop:'0px'}}>
          <img style={{flex:2}} width='300' src={Picture} alt='about_portrait'/>
        </div>

        
        <div style={{paddingTop:'50px',paddingLeft:'90px'}}>
          <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
        </div>
        <div><Footer /></div>
        

    </div>

  )
}

export default About
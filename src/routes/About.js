import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Picture from '../Resources/about_pic.jpg'
import '../components/About.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop:'90px',paddingLeft:"90px", color:"#fff",fontSize:'2.1rem',fontWeight:'900'}}>
          About Me
       </div> 
      <div class="row">
        <div class="col">
          <div style={{paddingTop:'25px',paddingLeft:"90px", color:"#dddaff",fontSize:'1rem',fontWeight:'500'}}> 
                Aside from being a Math & Computer Science student at McGill, I'm also an avid musician and music lover. I believe this fact is made obvious if you have had the time to look over my personal projects.
                I'm also a Software Developer at McGill's DDMAL lab, responsible for maintaining and developing the backend of
                a workflow management system for musicologists. 
                <p>If you are interested in my music, feel free to visit my youtube channel or the music page.</p>
            </div>
        </div>
        
        <div class="col">
          <div style={{position:'absolute',paddingLeft:'100px', paddingTop:'0px'}}>
              <img style={{flex:2}} width='300' src={Picture} alt='about_portrait'/>
            </div>
        </div>


          
      </div>
        <div style={{paddingTop:'100px',paddingLeft:'90px'}}>
          <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
          <div><Footer /></div>
        </div>
        
      

    </div>

  )
}

export default About
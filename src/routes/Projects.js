import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Picture from '../Resources/DDMAL.png'


const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop:'90px',paddingLeft:"90px", color:"#fff",fontSize:'2.1rem',fontWeight:'900'}}>
          Projects
       </div> 
      <div class="row">
        <div class="col">
          <div style={{paddingTop:'25px',paddingLeft:"90px", color:"#dddaff",fontSize:'1rem',fontWeight:'500'}}> 
                All of my personal projects are neatly organised in my Github page. I'm particularly proud of my work with McGill's <a style={{fontSize:"1rem", textDecoration:"underline"}} href="https://ddmal.music.mcgill.ca/" target="_blank">DDMAL lab</a> on Rodan, the workflow management system for musicologists. 
                More information <a style={{fontSize:"1rem", textDecoration:"underline"}} href="https://github.com/DDMAL/Rodan" target="_blank">here</a>.
            </div>
            </div>
        
        <div class="col">
          <img style={{flex:5, paddingLeft:"50px"}} width='500' src={Picture} alt='DDMAL lab picture'/>
        </div>
      </div>
        <div style={{paddingTop:'10px',paddingLeft:'90px'}}>
          <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
          <div><Footer /></div>
        </div>
        
      

    </div>

  )
}

export default About
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../index.css'

const Hello = () => {
  return (
    <div className='page'>
        <div><Navbar/></div>
      <div className='items-center justify-center h-full px=4'>
       <div style={{paddingTop:'90px',paddingLeft:"90px", color:"#f086a9",fontSize:'3rem',fontWeight:'900'}}>
          Hello, my name is Van!
       </div> 
        
        <div style={{paddingTop:'25px',float:"left","width":"60%",paddingLeft:"90px", color:"#dddaff",fontSize:'1.3rem',fontWeight:'500'}}> 
          I am a Math & CS student at McGill University, Montreal, Canada! I have a passion for data-driven projects and answer real world problems using data analysis. 
        </div>
       
        
        <div  style={{paddingTop:'25px',float:'left',width:'70%',paddingLeft:"90px", color:"#dddaff",fontSize:'1.5rem',fontWeight:'700'}}> 
           <p>I'm currently looking for a Full-time position for Summer 2023!</p>
        
          <div style={{paddingTop:'45px'}}>
            <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
          </div>
          <Footer style={{float:'left',width:'70%',paddingTop:"8px"}}/>
        </div>

        
      </div>
  </div>
  )
}

export default Hello
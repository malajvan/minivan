import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const Music = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop:'25px',float:"left","width":"60%",paddingLeft:"90px", color:"#dddaff",fontSize:'1.3rem',fontWeight:'500'}}> 
          This is currently under construction, feel free to visit my Youtube Channel in the mean time :D
      </div>
      <div class='row' style={{paddingTop:'150px' }}>
        <div style={{paddingTop:'10px',paddingLeft:'90px'}}>
          <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
          <div><Footer /></div>
        </div>
        </div>
    </div>)
    
}
export default Music
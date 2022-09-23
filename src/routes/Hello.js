import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Hello = () => {
  return (
    <div className='page'>
        <div><Navbar/></div>
      <div className='items-center justify-center h-full px=4'>
       <div style={{paddingTop:'90px',paddingLeft:"90px", color:"#f086a9",fontSize:'3rem',fontWeight:'900'}}>
          Hello, my name is Van!
       </div> 
        <div style={{paddingTop:'25px',paddingLeft:"90px",paddingRight:'500px', color:"#dddaff",fontSize:'1.3rem',fontWeight:'500'}}> 
        I am a Math & CS student at McGill University, Montreal, Canada! I have a passion for data-driven projects and answer real world problems using data analysis. 
        </div>
        <div  style={{paddingTop:'25px',paddingLeft:"90px",paddingRight:"500px", color:"#dddaff",fontSize:'1.5rem',fontWeight:'700'}}> I'm currently looking for a Full-time position for Summer 2023!</div>
        <div style={{paddingTop:'50px',paddingLeft:'90px'}}>
          <Link to="#" className='btn' onClick={() => window.location ='mailto:vanhongpham01@gmail.com'}>Say Hello!</Link>
        </div>
      </div>
  </div>
  )
}

export default Hello
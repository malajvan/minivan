import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Rodan from '../Resources/rodan-lab.png'
import MFCC from '../Resources/mfcc.png'


const About = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop:'60px',paddingLeft:"90px", color:"#fff",fontSize:'2.1rem',fontWeight:'900'}}>
          Projects
       </div> 
      <div class="projects">
        <div class="row">
          <a href="https://github.com/DDMAL/Rodan" target="_blank" rel="noreferrer">
          <div class="project">
            <div class="picon">
              <img style={{ flex: 2 }} width='450' src={Rodan} alt='DDMAL lab members - Summer 2023' /> 
            </div>
              <div class="pname">
              Rodan @ SIMSSA, DDMAL lab
            </div>
            <div class="pdesc">
                A web-based workflow engine for Optical Music Recognition
              </div>
              </div>
          </a>
        
          <a href="https://github.com/malajvan/MFCC" target="_blank" rel="noreferrer">
            <div class="project">
              <div class="picon">
                <img style={{ flex: 2 }} width='230' paddingTop='5px' src={MFCC} alt='about_portrait' />
              </div>
              <div class="pname">
                Spotify Popularity Predictions
              </div>
              <div class="pdesc">
                Using audio features (MFCC) to predict songs’ popularity with KNN
              </div>
            </div>
          </a>
          
        </div>
      </div>
      

    </div>

  )
}

export default About
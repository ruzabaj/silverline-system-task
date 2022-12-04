import React from 'react'
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import "../../assets/css/home.css";

const Home = () => {
  
  return (
    <div className='home'>
    <div className='left-container'>
    <LeftContainer/>
    </div>
    <div className='right-container'>
      <RightContainer />
    </div>
    </div>
  )
}

export default Home;
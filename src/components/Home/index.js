import React from 'react'
import { useNavigate } from "react-router-dom";
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import "../../css/home.css";

const Home = () => {
    const navigate= useNavigate();

    const handleSubmit =()=>{
      navigate("/show-table")
    }
  return (
    <div className='home'>
    <div className='left-container'>
    <LeftContainer/>
    </div>
    <div className='right-container'>
      <RightContainer  handleSubmit={handleSubmit}/>
    </div>
    </div>
  )
}

export default Home;
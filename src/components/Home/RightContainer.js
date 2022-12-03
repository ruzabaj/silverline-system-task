import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const RightContainer = () => {
  const [data, setData]= useState({
    names:" ",
    address:" ",
    panNumber:" ",
    emails: " ",
    phoneNum: " "
  });
  
  const handleChange= (e)=>{
    const newData= {...data}
    newData[e.target.id]=e.target.value;
    setData(newData);
    console.log(newData)
  }
  const navigate= useNavigate();

  const handleSubmit =()=>{
    localStorage.setItem("full name",data.names )
    localStorage.setItem("address",data.address )
    localStorage.setItem("pan number",data.panNumber )
    localStorage.setItem("email",data.emails )
    localStorage.setItem("phone num",data.phoneNum )
    navigate("/show-table")
  }
  return (
    <div className='system-form'>
    <h2>Silverline System Pvt Ltd</h2>
    <small>Add your credentials</small>
    <form>
    <div className="add-details">
    <div className="full-name">
      <label>Full Name:</label>
      <input type="text" id="names" onChange={handleChange}/>
    </div>
    <div className="address">
      <label>Address:</label>
      <input type="text" id="address"  onChange={handleChange}/>
    </div>
    <div className="pan-num">
      <label>PAN number:</label>
      <input type="text" id="panNumber"  onChange={handleChange}/>
    </div>
    <div className="email">
      <label>Email:</label>
      <input type="text" id="emails"  onChange={handleChange}/>
    </div>
    <div className="phone-num">
      <label>Phone number:</label>
      <input type="text" id="phoneNum"  onChange={handleChange}/>
    </div>
    <div className='btn-submit'>
    <button type="submit"
     onClick={handleSubmit}
     >Submit</button>
    </div>
    </div>
    </form>
    </div>
  )
}

export default RightContainer
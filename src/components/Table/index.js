import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft , faArrowAltCircleRight, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Tabledata = () => {

 
  const [fullName, setFullName] = useState("");
  const [address, setaddress] = useState("");
  const [panNum, setpanNum] = useState("");
  const [email, setemail] = useState("");
  const [phoneNum, setphoneNum] = useState("");

  useEffect(() => {
    setFullName(localStorage.getItem("full name"));
    setaddress(localStorage.getItem("address"));
    setpanNum(localStorage.getItem("pan number"));
    setemail(localStorage.getItem("email"));
    setphoneNum(localStorage.getItem("phone num"));
  
  }, []);
  const navigate = useNavigate();
 

  const BacktoHome = () => {
    navigate("/");
  };
  const BacktoNextTable = () => {
    navigate("/show-next-table");
  };
  const BacktoNext = () => {
    navigate("/show-next");
  };
 

  const list = [
    {
      id: '1',
      name: 'VSCode',
      deadline: 2020,
      type: 'SETUP',
      isComplete: true,
    },
    {
      id: '2',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '3',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '4',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '5',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '6',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '7',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '8',
      name: 'JavaScript',
      deadline: 2021,
      type: 'LEARN',
      isComplete: true,
    },
    {
      id: '9',
      name: 'React',
      deadline: 2022,
      type: 'LEARN',
      isComplete: false,
    }
  ];


  return (
    <div>
      <div className="header">
        <h2>Tabledata</h2>
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          onClick={BacktoHome}
          className="icon"
        />
      </div>
     
      <table className="table table-hover" id="example">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Pan Number</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
        {list.map((element, index)=>(
          <tr>
            <th scope="row">{element.id}</th>
            <td>{element.name}</td>
            <td>{element.deadline}</td>
            <td>{element.isComplete}</td>
            <td>{element.type}</td>
            <td>patan</td>
          </tr>
        ))}
        <tr>
        <th scope="row">1</th>
            <th scope="row">{fullName}</th>
            <td>{email}</td>
            <td>{panNum}</td>
            <td>{phoneNum}</td>
            <td>{address}</td>
            <td>patan</td>
          </tr>
        </tbody>
      </table>
      <FontAwesomeIcon
          icon={faArrowCircleRight}
          onClick={BacktoNextTable}
          className="icon"
        />
           <FontAwesomeIcon
          icon={faArrowCircleRight}
          onClick={BacktoNext}
          className="icon"
        />
    </div>
  );
};

export default Tabledata;

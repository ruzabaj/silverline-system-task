import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Tabledata = () => {
  const [getData, setGetData] = useState();
  const [fullName, setFullName]= useState('');
  const [address, setaddress]= useState('');
  const [panNum, setpanNum]= useState('');
  const [email, setemail]= useState('');
  const [phoneNum, setphoneNum]= useState('');

  const navigate = useNavigate();

  const BacktoHome = () => {
    navigate("/");
  };
  useEffect(() => {
    setFullName(localStorage.getItem("full name" ))
    setaddress(localStorage.getItem("address"))
    setpanNum(localStorage.getItem("pan number"))
    setemail(localStorage.getItem("email"))
    setphoneNum(localStorage.getItem("phone num"))
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data.data);
        setGetData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="header">
        <h2>Tabledata</h2>
        <FontAwesomeIcon icon={faArrowCircleLeft} onClick={BacktoHome} className="icon" />
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        {/* {getData.map((ele, index) => (
          <tbody key={index}>
            <tr>
              <th>{ele.id}</th>
              <th>{ele.first_name}</th>
              <th>{ele.email}</th>
              <th>
                <img src={ele.avatar} alt="avatar" />
              </th>
            </tr>
          </tbody>
        ))} */}
      </table>
      {/* {getData.map((element, index) => (
          <div key={index}>
              <p>{element.id}</p>
              <p>{element.first_name}</p>
              <p>{element.email}</p>
              <p>
                <img src={element.avatar} alt="avatar" />
              </p>
          </div>
        ))} */}
        <h3>{fullName}{panNum}</h3>
    </div>
  );
};

export default Tabledata;

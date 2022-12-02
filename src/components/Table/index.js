import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/table.css";

const Tabledata = () => {
  const [getData, setGetData] = useState();

  useEffect(() => {
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
      <h2>Tabledata</h2>
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
        {getData.map((ele, index) => (
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
        ))}
      </table>
    </div>
  );
};

export default Tabledata;

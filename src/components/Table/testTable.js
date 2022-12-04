import React,{useEffect, useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft , faArrowAltCircleRight, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const TestTable = () => {
  const [getData, setGetData] = useState([]);

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
    }, [])

    const columns= [
        {dataField: "id" , text:"ID"},
        {dataField: "first_name" , text:"First Name", sort: true},
        {dataField: "last_name" , text:" Last Name", sort: true},
        {dataField: "email" , text:"Email"},
        {dataField: "panNum" , text:"Pan Number"},
        {dataField: "address" , text:"A ddress"},
        {dataField: "phoneNum" , text:"Phone Number"},
    ]
     const pagination=paginationFactory({
        page : 1,
        paginationSize: 1 ,
        firstPageText:"<<",
        lastPageText:">>",
        sizePerPage: 5,
        prePageText:"<",
        nextPageText:">",
        showTotal: true
     })
  const navigate = useNavigate();

     const BacktoHome = () => {
        navigate("/");
      };
  return (
    <div>
         <FontAwesomeIcon
          icon={faArrowCircleLeft}
          onClick={BacktoHome}
          className="icon"
        />
        <BootstrapTable bootstrap4 keyField='id' columns={columns} data={getData} pagination={ pagination}/>
        {/* <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>email</th>
                </tr>
            </thead>
         {getData.map((element, index) => (
          <tr key={index}>
              <th>{element.id}</th>
              <th>{element.first_name}</th>
              <th>{element.email}</th>
              <th>
                <img src={element.avatar} alt="avatar" />
              </th>
          </tr>
        ))}
        </table> */}
    </div>
  )
}

export default TestTable
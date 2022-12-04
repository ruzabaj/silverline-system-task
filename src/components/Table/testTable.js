import React,{useEffect, useState} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft , faArrowAltCircleRight, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import "../../assets/css/table.css";

const TestTable = () => {
const store = useSelector(state=>{
  return{
    userAdd: state.userAdd
  }
});

    const columns= [
        {dataField: "names" , text:"First Name", sort: true},
        {dataField: "emails" , text:"Email"},
        {dataField: "panNumber" , text:"Pan Number"},
        {dataField: "address" , text:"Address"},
        {dataField: "phoneNum" , text:"Phone Number"},
    ]
     const pagination=paginationFactory({
        page : 1,
        paginationSize: 1 ,
        firstPageText:"<<",
        lastPageText:">>",
        sizePerPage: 1,
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
        <div className='responsive-table'>
          <BootstrapTable bootstrap4 keyField='id' columns={columns} data={store.userAdd.list} pagination={ pagination}/>
        </div>
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
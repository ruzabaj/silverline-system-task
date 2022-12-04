import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "../components/Table";
import App from "../App"
import Test from "../components/Table/test";
import TestTable from "../components/Table/testTable";

const MainRouter = () => {
  return (
    <div>
        <Router>
        <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/show-table" element={<Table/>}/>
        <Route path="/show-next-table" element={<Test/>}/>
        <Route path="/show-next" element={<TestTable/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default MainRouter
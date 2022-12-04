import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import TestTable from "../components/Table/testTable";

const MainRouter = () => {
  return (
    <div>
        <Router>
        <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/show-next" element={<TestTable/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default MainRouter
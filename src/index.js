import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/show-table" element={<Table/>}/>
      </Routes>
    </Router>
    {/* <App/> */}
  </React.StrictMode>
);

reportWebVitals();

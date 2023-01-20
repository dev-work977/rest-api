import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./component/Dashboard";

function App() {
  const token = localStorage.getItem("logonToken");

  if (!token) {
    return <Signin />;
  }
  //console.log(localStorage.getItem("user"));

  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

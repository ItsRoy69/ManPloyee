import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Employee from "./component/Employee";
import Profile from "./component/Profile";
import Home from "./component/Home";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/employee" element={<Employee />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path='/create' element={<AddEmployee />}></Route>
          <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

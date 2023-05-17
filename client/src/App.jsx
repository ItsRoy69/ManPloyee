import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Employee from "./component/Employee";
import Profile from "./component/Profile";
import Home from "./component/Home";
import AddEmployee from "./component/AddEmployee";
import EditEmployee from "./component/EditEmployee";
import Start from "./component/Start";
import EmployeeDetail from "./component/EmployeeDetail";
import EmployeeLogin from "./component/EmployeeLogin";

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem("authToken");

//   return isAuthenticated ? (
//     <Route {...rest} element={<Component />} />
//   ) : (
//     <Navigate to="/start" replace />
//   );
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<AddEmployee />} />
          <Route path="/employeeEdit/:id" element={<EditEmployee />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/employeeLogin" element={<EmployeeLogin />} />
        {/* <Route
          path="/employeedetail/:id"
          element={<ProtectedRoute element={<EmployeeDetail />} />}
        /> */}
        <Route
          path="/employeedetail/:id"
          element={<EmployeeDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

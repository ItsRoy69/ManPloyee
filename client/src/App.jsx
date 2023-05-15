import React from "react";
import Login from "./component/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./component/Dashboard";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

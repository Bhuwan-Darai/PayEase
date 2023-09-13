import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar"; // Import Sidebar here
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Student";
import Accountant from "./pages/Accountant";
import Notification from "./pages/Notification";
import Logout from "./pages/Logout";
import FeeStructure from "./pages/FeeStructure";
import Login from "./pages/Login";
import Payments from "./pages/Payments";
import CreateStudent from "./pages/CreateStudent";
import CreateAccountant from "./pages/CreateAccountant";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={
            <Sidebar>
              <Dashboard />
            </Sidebar>
          }
        />
        <Route
          path="/students"
          element={
            <Sidebar>
              <Students />
            </Sidebar>
          }
        />
        <Route
          path="/createStudent"
          element={
            <Sidebar>
              <CreateStudent />
            </Sidebar>
          }
        />
        <Route
          path="/accountant"
          element={
            <Sidebar>
              <Accountant />
            </Sidebar>
          }
        />
        <Route
          path="/createAccountant"
          element={
            <Sidebar>
              <CreateAccountant />
            </Sidebar>
          }
        />
        <Route
          path="/feeStructure"
          element={
            <Sidebar>
              <FeeStructure />
            </Sidebar>
          }
        />
        <Route
          path="/notification"
          element={
            <Sidebar>
              <Notification />
            </Sidebar>
          }
        />
        <Route
          path="/payment"
          element={
            <Sidebar>
              <Payments />
            </Sidebar>
          }
        />
        <Route
          path="/logout"
          element={
            <Sidebar>
              <Logout />
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
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
import Statements from "./pages/Statements";
import SeeDetails from "./pages/SeeDetails";

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
          path="/statements"
          element={
            <Sidebar>
              <Statements />
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
        <Route
          path="/seeDetails"
          element={
            <Sidebar>
              <SeeDetails />
            </Sidebar>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import SidebarLayout from "./components/SidebarLayout";
// import Home from "./pages/Home";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/*" element={<SidebarLayout />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

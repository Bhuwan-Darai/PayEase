import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    axios.post("/logout");
    setTimeout(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  );
};

export default Logout;

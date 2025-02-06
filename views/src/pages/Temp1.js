import React, { useEffect, useState } from "react";
import "./Temp1.css";
import Navbar from "../tOneComp/Nav";
import About from "../tOneComp/About";
import Projects from "../tOneComp/Projects";
import Footer from "../tOneComp/Footer";
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Temp1() {
  const [navbar, SetNavbar] = useState(Nav); // Default navbar set to Nav component
  const userInfo = window.localStorage.user;
  let history = useHistory();

  useEffect(() => {
    // Set the Navbar based on user info
    if (userInfo) {
      SetNavbar(UserNav); // If user is logged in, set UserNav
    }
  }, [userInfo]);

  // Function to handle click event for navigating to quick design page
  function handleClick() {
    history.push("/quickdesign");
  }

  return (
    <div>
      {navbar}
      <div id="tempBorder">
        <Navbar />
        <About />
        <Projects />
        <Footer />
      </div>
      <div id="tempBtn">
        <Button className="btn btn-info btn-lg" onClick={handleClick}>
          Templates
        </Button>
      </div>
    </div>
  );
}

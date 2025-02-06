import React, { useEffect, useState } from "react";
import Navbar from "../tTwoComp/Navbar";
import About from "../tTwoComp/About";
import Footer from "../tOneComp/Footer";
import Project from "../tTwoComp/Project";
import ProjectCard from "../tTwoComp/ProjectCard";
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Temp1.css";

export default function Temp1() {
  const [navbar, setNavbar] = useState(Nav); // Set the default navbar to Nav
  const userInfo = window.localStorage.user; // Get user info from localStorage
  let history = useHistory();

  useEffect(() => {
    // Dynamically set the navbar based on user info
    if (userInfo) {
      setNavbar(UserNav); // If user is logged in, show UserNav
    }
  }, [userInfo]); // Only rerun this effect if userInfo changes

  // Handle the button click to navigate to /quickdesign
  function handleClick() {
    history.push("/quickdesign");
  }

  return (
    <div>
      {navbar} {/* Dynamically rendered navbar */}
      <div id="tempBorder">
        <Navbar />
        <About />
        <Project />
        <ProjectCard />
        <Footer />
      </div>
      <div id="tempBtn2">
        <Button className="btn btn-info btn-lg" onClick={handleClick}>
          Templates
        </Button>
      </div>
    </div>
  );
}

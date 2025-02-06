import React, { useEffect, useState } from "react";
import "./CustomTemplate.css";
import { generatepage } from "../../src/utils/api.js";
import Nav from "../components/Navbar";
import UserNav from "../components/UserNav";

function getPageTemplate() {
  return `
    import React, { useState, useEffect } from "react";
    import Navbar from "../components/Navbar"; 
    import UserNav from "../components/UserNav"; 
    function CustomPage() {
      const [navbar, setNavbar] = useState(Nav); 
      const userInfo = window.localStorage.user; 

      useEffect(() => { 
        if(userInfo !== undefined) {
          setNavbar(UserNav); 
        }
      }, []);

      return (
        <div>
          {navbar}
          <div id="tempBorder">
            Insert_Custom_Page_Here
          </div>
          <BtnClear />
        </div>
      );
    }
    export default CustomPage;
  `;
}

function generatePage() {
  let customPage = "";

  const components = [
    { id: "navbar", component: "<Navbar />" },
    { id: "jumbotron", component: "<Jumbotron />" },
    { id: "jumbotronp", component: "<JumbotronP />" },
    { id: "jumbotronr", component: "<JumbotronR />" },
    { id: "card", component: "<Card />" },
    { id: "lovecard", component: "<Lovecard />" },
    { id: "mediacard", component: "<Mediacard />" },
    { id: "Colorpicker", component: "<Colorpicker />" },
    { id: "accordion", component: "<Accordion />" },
    { id: "stepper", component: "<Stepper />" },
    { id: "carousel", component: "<Carousel />" },
    { id: "carouselp", component: "<CarouselP />" },
    { id: "carouselr", component: "<CarouselR />" },
    { id: "table", component: "<Table />" },
    { id: "transferlist", component: "<TransferList />" },
    { id: "button", component: "<Button />" },
    { id: "footer", component: "<Footer />" },
  ];

  components.forEach(({ id, component }) => {
    if (document.getElementById(id).checked) {
      customPage += `
        <div className="MyComponent">
          ${component}
        </div>
      `;
    }
  });

  let completePage = getPageTemplate();
  completePage = completePage.replace("Insert_Custom_Page_Here", customPage);
  generatepage(completePage);
  window.location.href = "custompage";
}

function CustomTemplate() {
  const [navbar, setNavbar] = useState(Nav);
  const userInfo = window.localStorage.user;

  useEffect(() => {
    if (userInfo !== undefined) {
      setNavbar(UserNav);
    }
  }, []);

  return (
    <div>
      {navbar}
      <div className="customTemplate">
        <div className="PageTitle">
          <h1>Select components you want in your page? </h1>
        </div>
        <div className="MyContainer">
          <ul>
            {[
              "navbar",
              "jumbotron",
              "jumbotronp",
              "jumbotronr",
              "carousel",
              "accordion",
              "stepper",
              "table",
              "transferlist",
              "button",
              "footer",
            ].map((component) => (
              <li key={component}>
                <input
                  type="checkbox"
                  id={component}
                  name={component}
                  value={component}
                />
                <label htmlFor={component}>{component}</label>
              </li>
            ))}
          </ul>
          <button onClick={generatePage}>Generate New Page</button>
        </div>
      </div>
    </div>
  );
}

export default CustomTemplate;

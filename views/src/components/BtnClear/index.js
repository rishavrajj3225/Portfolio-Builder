import React from "react";
import { generatepage } from "../../utils/api.js";
import { Button } from "react-bootstrap";

const getPageTemplate = () => {
  return `import React from "react";
import Card from "../components/Card";
import Lovecard from "../components/Lovecard";
import Mediacard from "../components/Mediacard";
import Navbar from "../components/Navbar";
import Colorpicker from "../components/Colorpicker";
import Carousel from "../components/Carousel";
import CarouselP from "../components/CarouselP";
import CarouselR from "../components/CarouselR";
import Jumbotron from "../components/Jumbotron";
import JumbotronP from "../components/JumbotronP";
import JumbotronR from "../components/JumbotronR";
import Accordion from "../components/Accordion";
import Stepper from "../components/Stepper";
import TransferList from "../components/TransferList";
import Table from "../components/Table";
import Button from "../components/Button";
import Footer from "../components/Footer";
import BtnClear from "../components/BtnClear";

function CustomPage() {
  return (
    <div>
      Insert_Custom_Page_Here
    </div>
  );
}

export default CustomPage;`;
};

const clearPage = () => {
  // Your page design logic here
  let customPage = ""; // Optionally, generate custom content here based on the design

  let completePage = getPageTemplate();
  completePage = completePage.replace("Insert_Custom_Page_Here", customPage);

  console.log("Generated page - ", completePage);

  generatepage(completePage);

  // Trigger a page reload and redirect to the custom page
  window.location.href = "custompage";
  window.location.replace("/mainprofile");
};

const BtnClear = () => (
  <div className="mt-12 mb-12">
    <Button
      className="p-4"
      variant="warning"
      size="lg"
      block
      onClick={clearPage}
    >
      Clear the design
    </Button>
  </div>
);

export default BtnClear;

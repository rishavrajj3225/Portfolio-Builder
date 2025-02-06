import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Lovecard from "../components/Lovecard";
import Mediacard from "../components/Mediacard";
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
import BtnClear from "../components/BtnClear";

function CustomPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Custom Portfolio Components
        </h1>

        {/* Components Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card />
          <Lovecard />
          <Mediacard />
          <Colorpicker />
          <Carousel />
          <CarouselP />
          <CarouselR />
          <Jumbotron />
          <JumbotronP />
          <JumbotronR />
          <Accordion />
          <Stepper />
          <TransferList />
          <Table />
          <Button name="Click Me" />
          <BtnClear />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CustomPage;

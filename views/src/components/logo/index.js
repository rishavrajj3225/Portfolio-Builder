import React from "react";
import logo from "../../../public/favicon.ico";

const Header = () => {
  return (
    <div className="flex justify-center items-center py-4 bg-gray-800">
      <img src={logo} alt="Logo" className="w-24 h-auto" />
    </div>
  );
};

export default Header;

import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <div className="container mx-auto px-4">
        <img
          className="mx-auto mb-2 w-20 h-20"
          src="https://i1.wp.com/www.buyholdlong.com/wp-content/uploads/2017/01/portfolio-logo1.jpg?ssl=1"
          alt="Portfolio Logo"
        />

        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            Social Media
          </a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            Terms & Conditions
          </a>
        </div>

        <h5 className="text-lg font-semibold mt-2">
          Portfolio Builder © {new Date().getFullYear()}
        </h5>

        <p className="text-sm text-gray-400 mt-1">
          Brought to you by Phillip, Deepali, Suraj, Rich & Shivani.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

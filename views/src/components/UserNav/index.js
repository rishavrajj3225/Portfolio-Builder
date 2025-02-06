import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../../utils/api";

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Brand Name */}
          <Link to="/home" className="text-xl font-bold">
            Portfolio-Builder
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <NavLink
              to="/mainprofile"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "text-gray-300 hover:text-white"
              }
            >
              Profile
            </NavLink>
            <button onClick={logout} className="text-gray-300 hover:text-white">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 p-4 space-y-3">
          <NavLink
            to="/mainprofile"
            className={({ isActive }) =>
              isActive
                ? "block text-blue-400"
                : "block text-gray-300 hover:text-white"
            }
          >
            Profile
          </NavLink>
          <button
            onClick={logout}
            className="block text-gray-300 hover:text-white"
          >
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
}

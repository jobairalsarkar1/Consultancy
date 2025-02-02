import { useState } from "react";
import { Link } from "react-router-dom";
import { care2 } from "../assets";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:px-28 px-5 py-2 md:py-1 bg-white sm:bg-transparent backdrop-blur-lg border-b-2 border-b-blue-200 absolute top-0 right-0 left-0 z-30">
      {/* Care2 Logo */}
      <Link to="/" className="w-16 h-12 md:w-28 md:h-20">
        {/* Adjusted size */}
        <img
          src={care2}
          alt="Care2 Logo"
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="lg:text-lg hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5 md:font-semibold">
        <li>
          <Link
            to="/"
            className="cursor-pointer relative group bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <span className="text-blue-50 mx-0">|</span> {/* Separator */}
        {/* Services Dropdown */}
        <li className="relative group">
          <button className="cursor-pointer bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
            Services <FaAngleDown className="inline-block text-[#ffffff]" />
          </button>
          <div className="absolute left-0 hidden mt-0 bg-white border-2 border-gray-300 rounded-lg shadow-xl group-hover:block min-w-max backdrop-blur-md">
            <ul className="p-2">
              {[
                { path: "/study-abroad", label: "Student Visa Assistance" },
                { path: "/work-abroad", label: "Abroad Work Assistance" },
                { path: "/live-abroad", label: "Abroad Living Consultancy" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block text-[1rem] px-4 py-1 text-[#1D86EF] hover:text-white hover:bg-[#0F53DB] rounded-md transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <span className="text-gray-50 mx-0">|</span> {/* Separator */}
        <li>
          <Link
            to="/jobs"
            className="cursor-pointer relative group bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] bg-clip-text text-transparent"
          >
            Find Jobs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <span className="text-gray-50 mx-0">|</span> {/* Separator */}
        <li>
          <Link
            to="/consultation"
            className="cursor-pointer relative group bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] bg-clip-text text-transparent"
          >
            Consultation
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <span className="text-gray-50 mx-0">|</span> {/* Separator */}
        {/* About Us Dropdown Menu */}
        <li className="relative group">
          <button className="cursor-pointer bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] bg-clip-text text-transparent">
            About Us <FaAngleDown className="inline-block text-[#0F53DB]" />
          </button>
          <div className="absolute left-0 hidden mt-0 bg-white border border-gray-300 rounded-lg shadow-xl group-hover:block min-w-max">
            <ul className="p-2">
              {[
                { path: "/about-us", label: "About Us" },
                { path: "/about-us", label: "Locations" },
                { path: "/about-us", label: "Our Partners" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block text-[1rem] px-4 py-1 text-[#1D86EF] hover:text-white hover:bg-[#0F53DB] rounded-md transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <span className="text-gray-50 mx-0">|</span> {/* Separator */}
        <Link
          to="#"
          className="hidden md:block ml-6 px-6 py-2.5 text-white hover:text-white shadow-md rounded-lg border-2 border-blue-200 bg-transparent transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:border-transparent hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Make an Appointment
        </Link>
      </ul>

      {/* Mobile Menu Toggle (Open) */}
      {!isOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden absolute right-7"
        >
          <FaBars className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />
        </button>
      )}

      {/* Mobile Menu */}
      <div
        className={`pt-28 pl-8 md:pl-9 text-sm md:text-lg fixed md:hidden top-0 right-0 w-[70%] h-screen bg-gradient-to-br from-[#1D86EF] via-[#0F53DB] to-[#1D86EF] text-white flex flex-col items-start justify-start gap-5 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Mobile Menu Toggle (Close) */}
        {isOpen && (
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden absolute right-7 top-5 z-20"
          >
            <FaXmark className="w-7 h-7 sm:w-8 sm:h-8 text-white hover:text-gray-300 transition" />
          </button>
        )}
        <ul className="text-lg font-semibold">
          {[
            { path: "/", label: "Home" },
            { path: "/jobs", label: "Find Jobs" },
            { path: "/study-abroad", label: "Student Visa Assistance" },
            { path: "/work-abroad", label: "Abroad Work Assistance" },
            { path: "/live-abroad", label: "Abroad Living Consultancy" },
            { path: "/consultation", label: "Consultation" },
            { path: "/about-us", label: "About Us" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="hover:text-gray-300 cursor-pointer text-sm md:text-lg"
                onClick={toggleMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="#"
          className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#1D86EF] to-[#0F53DB] shadow-md hover:bg-gradient-to-l hover:from-[#1D86EF] hover:to-[#0F53DB] hover:shadow-lg transition duration-300"
          onClick={toggleMenu}
        >
          Make an Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

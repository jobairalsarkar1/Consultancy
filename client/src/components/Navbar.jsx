import { useState } from "react";
// import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { care2 } from "../assets";
import { FaAngleDown, FaBars } from "react-icons/fa"; // Importing FaBars from react-icons
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isServicesHovered, setIsServicesHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:px-24 px-5 py-4 bg-white border border-b-gray-300 absolute top-0 bg-transparent right-0 left-0 z-30">
      {/* Care2 Logo */}
      <Link to="/">
        <img
          src={care2}
          alt="Care2 Logo"
          className="w-15 h-10 md:w-20 md:h-12 object-contain"
        />
      </Link>
      {/* Desktop Menu */}
      <ul className="lg:text-lg hidden md:flex items-center gap-3 lg:gap-6 xl:gap-7 md:font-semibold">
        <li>
          <Link
            to="/"
            className="cursor-pointer relative group bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        {/* <li>
          <Link to="/services" className="cursor-pointer relative group">
            Services <FaAngleDown className="inline-block" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li> */}
        {/* Services Dropdown */}
        <li className="relative group">
          <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Services <FaAngleDown className="inline-block text-teal-600" />
          </button>
          {/* Dropdown Menu */}
          <div className="absolute left-0 hidden mt-0 bg-white border border-gray-300 rounded-lg shadow-xl group-hover:block min-w-max">
            <ul className="p-2">
              <li>
                <Link
                  to="/study-abroad"
                  className="block text-[1.1rem] px-4 py-2 text-cyan-600 hover:text-white hover:bg-blue-600 rounded-md transition-colors duration-300"
                >
                  Student Visa Assistance
                </Link>
              </li>
              <li>
                <Link
                  to="/work-abroad"
                  className="block text-[1.1rem] px-4 py-2 text-cyan-600 hover:text-white hover:bg-blue-600 rounded-md transition-colors duration-300"
                >
                  Abroad Work Assistance
                </Link>
              </li>
              <li>
                <Link
                  to="/live-abroad"
                  className="block text-[1.1rem] px-4 py-2 text-cyan-600 hover:text-white hover:bg-blue-600 rounded-md transition-colors duration-300"
                >
                  Abroad Living Consultancy
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <Link
            to="/jobs"
            className="cursor-pointer relative group bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
          >
            Jobs
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/consultation"
            className="cursor-pointer relative group bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
          >
            Consultation
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className="cursor-pointer relative group bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent"
          >
            About Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        {/* <li>
          <ScrollLink to="contact" className="cursor-pointer relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-700 group-hover:w-full"></span>
          </ScrollLink>
        </li> */}
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
        className={`pt-28 pl-8 md:pl-9 text-sm md:text-lg fixed md:hidden top-0 right-0 w-[60%] h-screen bg-gradient-to-br from-teal-600 via-green-600 to-teal-600
 text-white flex flex-col items-start justify-start gap-5 transform ${
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
          <li>
            <Link
              to="/"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu} // Close menu on link click
            >
              Home
            </Link>
          </li>

          {/* <li>
            <Link
              to="/services"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li> */}

          <li>
            <Link
              to="/jobs"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              to="/study-abroad"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Student Visa Assistance
            </Link>
          </li>
          <li>
            <Link
              to="/work-abroad"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Abroad Work Assistance
            </Link>
          </li>
          <li>
            <Link
              to="/live-abroad"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Abroad Living Consultancy
            </Link>
          </li>
          <li>
            <Link
              to="/consultation"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Consultation
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          {/* <li>
            <Link
              to="contact"
              className="cursor-pointer hover:text-gray-300 text-sm md:text-lg"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li> */}
        </ul>
        <Link
          to="#"
          className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          onClick={toggleMenu} // Close menu on button click
        >
          Make an Appontment
        </Link>
      </div>

      {/* Button in Desktop view */}
      <Link
        to="#"
        className="hidden md:block px-4 py-2.5 text-white shadow-md rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-0.5"
      >
        Make an Appontment
      </Link>

      {/* 
      <button type="button" className="button md:hidden absolute right-7">
        <FaBars className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />
      </button> */}
    </nav>
  );
};

export default Navbar;

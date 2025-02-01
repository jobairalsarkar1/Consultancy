import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  FaCalendarAlt,
  FaBriefcase,
  FaGlobe,
  FaUsers,
  FaRegClipboard,
  FaFileAlt,
} from "react-icons/fa";
import {
  // Clients,
  AddDestinations,
  JobPostings,
  Apponitments,
  Applications,
} from "../components";

const AdminPanel = () => {
  return (
    <div className="flex min-h-screen mt-20 bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-5 hidden lg:block">
        <h2 className="text-2xl font-bold text-gray-700 px-3 mb-6">
          Admin Panel
        </h2>
        <nav>
          <ul className="space-y-0">
            <li>
              <NavLink
                to="appointments"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaCalendarAlt className="mr-2 text-purple-500" />
                <span className="hidden lg:block">Appointments</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="jobs"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaBriefcase className="mr-2 text-orange-500" />
                <span className="hidden lg:block">Job Postings</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="destinations"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaGlobe className="mr-2 text-red-500" />
                <span className="hidden lg:block">Add Destinations</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="applications"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaFileAlt className="mr-2 text-green-500" />
                <span className="hidden lg:block">Applications</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="clients"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaUsers className="mr-2 text-green-500" />
                <span className="hidden lg:block">Clients</span>
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside className="lg:hidden w-16 bg-white shadow-lg p-3">
        <nav>
          <ul className="space-y-4">
            <li>
              <NavLink
                to="appointments"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaCalendarAlt className="text-purple-500" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="jobs"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaBriefcase className="text-orange-500" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="destinations"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaGlobe className="text-red-500" />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="clients"
                className="flex items-center p-3 hover:bg-gray-200 rounded-lg"
              >
                <FaUsers className="text-green-500" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route
            path="/"
            element={
              <h1 className="text-3xl font-semibold text-gray-800">
                Welcome to Admin Panel
              </h1>
            }
          />
          <Route path="appointments" element={<Apponitments />} />
          <Route path="jobs" element={<JobPostings />} />
          <Route path="destinations" element={<AddDestinations />} />
          {/* <Route path="clients" element={<Clients />} /> */}
          <Route path="applications" element={<Applications />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;

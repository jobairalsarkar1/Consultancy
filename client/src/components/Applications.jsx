import React, { useState } from "react";
import { FaEye, FaTrash, FaFileDownload, FaTimes } from "react-icons/fa";

const mockApplications = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    jobTitle: "Frontend Developer",
    about: "Experienced in React, Tailwind CSS...",
    cv: "https://example.com/resume-john.pdf",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    jobTitle: "Backend Developer",
    about: "Expert in Node.js, Express, and MongoDB...",
    cv: "https://example.com/resume-jane.pdf",
  },
];

const Applications = () => {
  const [applications, setApplications] = useState(mockApplications);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal with selected application details
  const handleView = (app) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  // Delete application
  const handleDelete = (id) => {
    const updatedApps = applications.filter((app) => app.id !== id);
    setApplications(updatedApps);
  };

  return (
    <section className="max-w-4xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        📄 Job Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-center text-gray-600">No applications found.</p>
      ) : (
        <div className="grid gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex justify-between items-center bg-white shadow-lg rounded-lg p-5 border border-gray-200 hover:shadow-xl transition"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {app.name}
                </h2>
                <p className="text-sm text-gray-600">{app.email}</p>
                <p className="text-sm text-blue-500 font-medium">
                  {app.jobTitle}
                </p>
              </div>

              <div className="flex items-center gap-4">
                {/* View Icon */}
                <FaEye
                  onClick={() => handleView(app)}
                  className="text-blue-500 cursor-pointer text-xl hover:text-blue-700 transition"
                  title="View Application"
                />

                {/* Delete Icon */}
                <FaTrash
                  onClick={() => handleDelete(app.id)}
                  className="text-red-500 cursor-pointer text-xl hover:text-red-700 transition"
                  title="Delete Application"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {isModalOpen && selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              {selectedApp.name}
            </h2>
            <p className="text-gray-700">
              <strong>Email:</strong> {selectedApp.email}
            </p>
            <p className="text-gray-700">
              <strong>Job Title:</strong> {selectedApp.jobTitle}
            </p>
            <p className="text-gray-700">
              <strong>About:</strong> {selectedApp.about}
            </p>

            <div className="mt-4 flex gap-3">
              <a
                href={selectedApp.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition"
                download
              >
                <FaFileDownload /> Download CV
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-600 transition"
              >
                <FaTimes /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Applications;

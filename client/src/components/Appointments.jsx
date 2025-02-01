import React, { useState } from "react";
import { FaSearch, FaEye } from "react-icons/fa";

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "+8801234567890",
      country: "USA",
      universities: ["Harvard University", "MIT", "Stanford University"],
      status: "Completed",
      service: "Study Abroad",
    },
    {
      id: 2,
      fullName: "John Doe",
      email: "johndoe@example.com",
      phone: "+8801712345678",
      service: "Work Abroad",
      country: "Canada",
      message:
        "I am interested in job opportunities in Canada and would like to know more about the visa process.",
      contactTime: "Morning",
      status: "Pending",
    },
    {
      id: 3,
      fullName: "Michael Smith",
      email: "michael.smith@example.com",
      phone: "+8801712345680",
      service: "Both",
      country: "Germany",
      message:
        "I am interested in both work and living opportunities in Germany. Please provide more details about available programs.",
      contactTime: "Evening",
      status: "Completed",
    },
    {
      id: 4,
      fullName: "Mike Vhon",
      email: "mike@example.com",
      phone: "+8801234567890",
      country: "Finland",
      universities: ["Uni1 University", "SST", "Belgorod University"],
      status: "Pending",
      service: "Study Abroad",
    },
    {
      id: 5,
      fullName: "David Wilson",
      email: "david.wilson@example.com",
      phone: "+8801712345682",
      service: "Live Abroad",
      country: "United Kingdom",
      message:
        "I'm looking for advice on how to move to the UK and live there long term. Any guidance would be appreciated.",
      contactTime: "Afternoon",
      status: "Pending",
    },
  ]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewAppointment = (appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Appointments</h1>
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex items-center space-x-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md w-1/3">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search appointments..."
            className="outline-none w-full text-lg text-gray-700"
          />
        </div>
      </div>

      {/* Appointments Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                Client Name
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                Service
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700 hidden sm:table-cell">
                Status
              </th>
              <th className="py-3 px-4 text-left font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-b">
                <td className="py-3 px-4">{appointment.fullName}</td>
                <td className="py-3 px-4">{appointment.service}</td>
                <td className="py-3 px-4 hidden sm:table-cell">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      appointment.status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleViewAppointment(appointment)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEye className="inline mr-1" />
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Appointment Details
            </h2>
            <p className="text-lg font-medium text-gray-600">
              <strong>Client:</strong> {selectedAppointment.fullName}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <strong>Email:</strong> {selectedAppointment.email}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <strong>Phone:</strong> {selectedAppointment.phone}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <strong>Service:</strong> {selectedAppointment.service}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <strong>Country:</strong> {selectedAppointment.country}
            </p>

            {selectedAppointment.universities && (
              <p className="text-lg font-medium text-gray-600">
                <strong>Universities:</strong>{" "}
                {selectedAppointment.universities.join(", ")}
              </p>
            )}

            {selectedAppointment.message && (
              <p className="text-lg font-medium text-gray-600">
                <strong>Message:</strong> {selectedAppointment.message}
              </p>
            )}

            {selectedAppointment.contactTime && (
              <p className="text-lg font-medium text-gray-600">
                <strong>Preferred Contact Time:</strong>{" "}
                {selectedAppointment.contactTime}
              </p>
            )}

            <p className="text-lg font-medium text-gray-600">
              <strong>Status:</strong> {selectedAppointment.status}
            </p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;

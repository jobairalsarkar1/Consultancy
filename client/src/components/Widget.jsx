// src/components/Widget.jsx
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Widget = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the widget expansion
  const toggleWidget = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative shadow-xl">
      {/* Floating Button, positioned even more left */}
      <button
        onClick={toggleWidget}
        className={`fixed shadow-2xl bottom-20 right-28 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 ease-in-out transform ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </button>

      {/* Expanded widget with phone number */}
      <div
        className={`fixed bottom-20 right-28 transition-all duration-500 ease-in-out transform ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } ${
          isOpen ? "w-64" : "w-0"
        } overflow-hidden bg-white p-4 rounded-lg shadow-lg z-40`}
      >
        <p className="font-semibold text-lg">Contact Us</p>
        <p className="text-gray-600">
          WhatsApp Number: <strong>{phoneNumber}</strong>
        </p>
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-green-500 hover:underline"
        >
          Chat now
        </a>
      </div>
    </div>
  );
};

export default Widget;

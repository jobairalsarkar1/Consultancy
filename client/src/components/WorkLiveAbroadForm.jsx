import { useState } from "react";
import { FaAsterisk } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css"; // Import CSS for styling

const WorkLiveAbroadForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    message: "",
    contactTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      phone: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, like sending the data to an API or email
    console.log(formData);
  };

  return (
    <section className="max-container mt-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-8 py-8 rounded-xl shadow-xl border border-gray-200 bg-slate-200">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Apply for Your Work & Live Abroad Consultation
        </h2>
        <p className="text-center text-lg px-5 mt-4 mb-8 text-gray-600">
          Fill in the form below to receive expert guidance on your journey to
          live and work abroad. Our team will reach out to assist you within 24
          hours.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              <span className="flex items-center gap-0.5">
                Full Name <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              <span className="flex items-center gap-0.5">
                Email Address{" "}
                <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              <span className="flex items-center gap-0.5">
                Phone Number <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <PhoneInput
              country={"bd"} // Default country
              enableSearch={true}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputStyle={{
                width: "100%",
                padding: "12px 50px",
                borderRadius: "8px",
                backgroundColor: "#f0f4f8",
                border: "2px solid #cbd5e0",
                fontSize: "16px",
                color: "#333",
              }}
              containerStyle={{
                border: "2px solid #cbd5e0",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
          </div>

          {/* Service Interest */}
          <div className="mb-6">
            <label
              htmlFor="service"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              <span className="flex items-center gap-0.5">
                Which service are you interested in?
                <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select a Service</option>
              <option value="Work Abroad">Work Abroad</option>
              <option value="Live Abroad">Live Abroad</option>
              <option value="Both">Both</option>
            </select>
          </div>

          {/* Preferred Country */}
          <div className="mb-6">
            <label
              htmlFor="country"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              <span className="flex items-center gap-0.5">
                Preferred Country{" "}
                <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your preferred country"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Additional Information */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Additional Information or Questions (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter any additional information or questions you may have"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows="4"
            />
          </div>

          {/* Best Time to Contact */}
          <div className="mb-6">
            <label
              htmlFor="contactTime"
              className="block text-lg font-semibold text-gray-700 mb-2"
            >
              Best Time to Contact (Optional)
            </label>
            <select
              id="contactTime"
              name="contactTime"
              value={formData.contactTime}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select Time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              Submit Your Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default WorkLiveAbroadForm;

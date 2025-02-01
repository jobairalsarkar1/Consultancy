import { useState } from "react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { FaAsterisk } from "react-icons/fa";

const countryOptions = [
  {
    value: "usa",
    label: "USA",
    universities: ["Harvard University", "MIT", "Stanford University"],
  },
  {
    value: "uk",
    label: "UK",
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
    ],
  },
  {
    value: "canada",
    label: "Canada",
    universities: [
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
    ],
  },
];

const StudyAbroadForm = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedUniversities, setSelectedUniversities] = useState([]);
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactTime, setContactTime] = useState(""); // State for Best Time to Contact

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedUniversities([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      phone,
      country: selectedCountry?.label,
      universities: selectedUniversities.map((uni) => uni.label),
      contactTime, // Include the contact time in form data
    };

    // Here you can use formData to send the data to your backend
    console.log("Form submitted:", formData);

    // Reset form
    setFullName("");
    setEmail("");
    setPhone("");
    setSelectedCountry(null);
    setSelectedUniversities([]);
    setContactTime(""); // Reset Best Time to Contact
  };

  return (
    <section className="max-container mt-16 min-h-screen">
      <div className="max-w-2xl mx-auto px-8 py-8 rounded-xl shadow-xl border border-gray-200 bg-slate-200">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Apply for Your Study Abroad Journey
        </h2>
        <p className="text-center text-lg px-5 mt-4 mb-8 text-gray-600">
          Get expert guidance on your study abroad process. Our team will reach
          out within 24 hours to assist you.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              <span className="flex items-center gap-0.5">
                Full Name <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              <span className="flex items-center gap-0.5">
                Email <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              <span className="flex items-center gap-0.5">
                Phone Number <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <PhoneInput
              country={"bd"} // Default country
              enableSearch={true}
              value={phone}
              onChange={setPhone}
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

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              <span className="flex items-center gap-0.5">
                Select a Country{" "}
                <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
              </span>
            </label>
            <Select
              options={countryOptions}
              onChange={handleCountryChange}
              className="w-full"
            />
          </div>

          {selectedCountry && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Select Universities (Optional)
              </label>
              <Select
                options={selectedCountry.universities.map((uni) => ({
                  value: uni,
                  label: uni,
                }))}
                isMulti
                onChange={setSelectedUniversities}
                className="w-full"
              />
            </div>
          )}

          {/* Best Time to Contact Field */}
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
              value={contactTime}
              onChange={(e) => setContactTime(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">Select Time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default StudyAbroadForm;

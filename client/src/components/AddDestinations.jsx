import React, { useState } from "react";

const AddDestinations = () => {
  const [newCountry, setNewCountry] = useState("");
  const [newCountryValue, setNewCountryValue] = useState("");
  const [newCountryLevel, setNewCountryLevel] = useState(""); // Added level state
  const [universities, setUniversities] = useState([""]); // Array to hold universities
  const [countries, setCountries] = useState([]);

  // Function to handle university input
  const handleUniversityChange = (index, value) => {
    const newUniversities = [...universities];
    newUniversities[index] = value;
    setUniversities(newUniversities);
  };

  // Function to add a new university input field
  const handleAddUniversityField = () => {
    setUniversities([...universities, ""]);
  };

  // Function to handle adding the new country with universities
  const handleAddCountry = () => {
    if (!newCountry || !newCountryValue || !newCountryLevel) return;

    setCountries([
      ...countries,
      {
        value: newCountryValue.toLowerCase(),
        label: newCountry,
        level: newCountryLevel, // Add country level
        universities: universities.filter((uni) => uni), // Filter out empty university fields
      },
    ]);

    // Reset form fields
    setNewCountry("");
    setNewCountryValue("");
    setNewCountryLevel("");
    setUniversities([""]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Destinations</h2>

      {/* Add New Country Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Add a New Country</h3>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Country Name (e.g., Australia)"
            className="w-full p-2 border rounded"
            value={newCountry}
            onChange={(e) => setNewCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country Value (e.g., australia)"
            className="w-full p-2 border rounded"
            value={newCountryValue}
            onChange={(e) => setNewCountryValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country Level (e.g., undergraduate)"
            className="w-full p-2 border rounded"
            value={newCountryLevel}
            onChange={(e) => setNewCountryLevel(e.target.value)}
          />
        </div>
      </div>

      {/* Add Universities Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-2">Add Universities</h3>
        {universities.map((university, index) => (
          <div key={index} className="flex space-x-2 mb-3">
            <input
              type="text"
              placeholder="University Name"
              className="w-full p-2 border rounded"
              value={university}
              onChange={(e) => handleUniversityChange(index, e.target.value)}
            />
          </div>
        ))}
        <button
          onClick={handleAddUniversityField}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Add Another University
        </button>
      </div>

      {/* Add Country Button */}
      <button
        onClick={handleAddCountry}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Add Country
      </button>
    </div>
  );
};

export default AddDestinations;

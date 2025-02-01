import { useParams } from "react-router-dom";
import { useState } from "react";
import { jobs } from "../utils";
import { FaAsterisk } from "react-icons/fa";

const JobDetails = () => {
  const { jobId } = useParams(); // Get the jobId from the URL
  const job = jobs.find((job) => job.id === parseInt(jobId)); // Find the job post by jobId

  const [showForm, setShowForm] = useState(false); // State to toggle the application form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    cv: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      cv: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the server)
    console.log("Form Submitted:", formData);
    alert("Application Submitted!");
    setShowForm(false); // Optionally close the form after submission
  };

  if (!job) {
    return <p className="text-center text-lg text-red-500">Job not found.</p>;
  }

  return (
    <section className="max-container min-h-screen mt-16 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {job.title}
        </h1>
        <p className="text-xl text-gray-600 mt-2">{job.company_name}</p>
        <p className="text-xl text-gray-600 mt-2">{job.location}</p>
        <p className="text-lg font-semibold text-gray-800 mt-2">{job.salary}</p>
        <p className="mt-4 text-gray-700">{job.description}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Requirements</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index} className="mt-1">
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Responsibilities
          </h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            {job.responsibilities.map((res, index) => (
              <li key={index} className="mt-1">
                {res}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-500 hover:to-blue-500 px-6 py-2 rounded-lg text-lg transition duration-300 w-full sm:w-auto"
          >
            Apply Now
          </button>
          <a
            href="/jobs"
            className="text-lg font-semibold text-teal-500 hover:underline w-full sm:w-auto text-center sm:text-left"
          >
            Back to Job Listings
          </a>
        </div>

        {showForm && (
          <div className="mt-8 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Apply for {job.title}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block sm:text-lg font-medium text-gray-700">
                  <span className="flex items-center gap-0.5">
                    Full Name{" "}
                    <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 border rounded-lg outline-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block sm:text-lg font-medium text-gray-700">
                  <span className="flex items-center gap-0.5">
                    Email Address{" "}
                    <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 mt-2 border rounded-lg outline-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block sm:text-lg font-medium text-gray-700">
                  About You
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full p-3 mt-2 border rounded-lg outline-blue-400"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block sm:text-lg font-medium text-gray-700">
                  <span className="flex items-center gap-0.5">
                    Upload CV (PDF only){" "}
                    <FaAsterisk className="text-red-500 w-2.5 h-2.5" />
                  </span>
                </label>
                <input
                  type="file"
                  name="cv"
                  onChange={handleFileChange}
                  required
                  className="w-full p-3 mt-2 border rounded-lg bg-white"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-500 hover:to-blue-500 px-6 py-2 rounded-lg text-lg transition duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobDetails;

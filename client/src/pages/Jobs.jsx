import { useState } from "react";
import { jobs } from "../utils";
import { jobs_bg } from "../assets";
import { Link } from "react-router-dom";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Jobs = () => {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-container min-h-screen mt-16 px-0">
      <Helmet>
        <title>Job Opportunities | Care2 Training Consultancy</title>
        <meta
          name="description"
          content="Browse available job opportunities at Care2 Training Consultancy, including roles across various industries worldwide."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div
        style={{
          backgroundImage: "url(" + jobs_bg + ")",
        }}
        className="relative bg-cover bg-center h-[380px] flex flex-col justify-center items-center text-white sm:bg-none"
      >
        <div className="p-8 rounded-lg backdrop-blur-2xl bg-opacity-80 text-center w-full max-w-xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-heading"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              color: "white",
            }} // Added text color as white here
          >
            Find Your Dream Job
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-sans mb-4 text-slate-600">
            Browse through available opportunities
          </p>
          <div className="mt-4 flex space-x-2 justify-center w-full">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-md text-black w-full focus:outline-1 border-2 border-gray-300"
            />
            <button className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 px-4 py-2 rounded-md transition-all duration-300">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-5 xl:mt-8">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-lg text-gray-600 mt-2">{job.company_name}</p>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-sm text-gray-500 font-semibold">
                  {job.job_type} | {job.salary}
                </p>
              </div>

              <Link
                to={`/job-details/${job.id}`}
                className="mt-4 flex items-center justify-center gap-2 text-blue-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 px-4 py-2 rounded-lg transition-all duration-300 max-w-xs self-start border-2 border-blue-500"
              >
                <span>View Post</span>
                <FaArrowRight className="inline" />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No jobs found
          </p>
        )}
      </div>
    </section>
  );
};

export default Jobs;

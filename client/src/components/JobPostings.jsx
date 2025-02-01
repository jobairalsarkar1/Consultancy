import React, { useState } from "react";

const JobPostings = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Ltd.",
      location: "Remote",
      salary: "$60,000 - $80,000/year",
      jobType: "Full-Time",
      requirements: ["React.js", "Next.js", "Tailwind CSS"],
      responsibilities: ["Develop UI components", "Optimize performance"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Code Innovators",
      location: "Dhaka, Bangladesh",
      salary: "BDT 80,000 - 100,000/month",
      jobType: "Full-Time",
      requirements: ["Node.js", "Express.js", "MongoDB"],
      responsibilities: ["Build APIs", "Handle authentication"],
    },
  ]);

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    requirements: [],
    responsibilities: [],
  });

  const [newRequirement, setNewRequirement] = useState("");
  const [newResponsibility, setNewResponsibility] = useState("");

  const handleAddRequirement = () => {
    if (newRequirement.trim()) {
      setJob({ ...job, requirements: [...job.requirements, newRequirement] });
      setNewRequirement("");
    }
  };

  const handleAddResponsibility = () => {
    if (newResponsibility.trim()) {
      setJob({
        ...job,
        responsibilities: [...job.responsibilities, newResponsibility],
      });
      setNewResponsibility("");
    }
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!job.title || !job.company) {
      alert("Title and Company are required");
      return;
    }

    // Mock database submission
    console.log("Job submitted to database:", job);

    // Reset form after submission
    setJob({
      title: "",
      company: "",
      location: "",
      salary: "",
      jobType: "",
      requirements: [],
      responsibilities: [],
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Post a New Job</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-4 rounded-lg shadow"
      >
        <input
          type="text"
          placeholder="Job Title"
          className="w-full p-2 border rounded"
          value={job.title}
          onChange={(e) => setJob({ ...job, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 border rounded"
          value={job.company}
          onChange={(e) => setJob({ ...job, company: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded"
          value={job.location}
          onChange={(e) => setJob({ ...job, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Salary"
          className="w-full p-2 border rounded"
          value={job.salary}
          onChange={(e) => setJob({ ...job, salary: e.target.value })}
        />
        <input
          type="text"
          placeholder="Job Type"
          className="w-full p-2 border rounded"
          value={job.jobType}
          onChange={(e) => setJob({ ...job, jobType: e.target.value })}
        />

        <div>
          <label className="font-semibold">Requirements:</label>
          <div className="space-y-1">
            {job.requirements.map((req, index) => (
              <p key={index} className="text-sm text-gray-700">
                - {req}
              </p>
            ))}
          </div>
          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              placeholder="Add requirement"
              className="w-full p-2 border rounded"
              value={newRequirement}
              onChange={(e) => setNewRequirement(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddRequirement}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>

        <div>
          <label className="font-semibold">Responsibilities:</label>
          <div className="space-y-1">
            {job.responsibilities.map((res, index) => (
              <p key={index} className="text-sm text-gray-700">
                - {res}
              </p>
            ))}
          </div>
          <div className="flex space-x-2 mt-2">
            <input
              type="text"
              placeholder="Add responsibility"
              className="w-full p-2 border rounded"
              value={newResponsibility}
              onChange={(e) => setNewResponsibility(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddResponsibility}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-6 mb-4 text-center">Posted Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No jobs posted yet.</p>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-4 bg-white rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-gray-700">
                  {job.company} - {job.location}
                </p>
                <p className="text-gray-500">
                  {job.salary} | {job.jobType}
                </p>
              </div>
              <button
                onClick={() => handleDeleteJob(job.id)}
                className="text-white hover:font-semibold bg-red-500 px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPostings;

import React, { useState, useEffect } from 'react';
import ApplicationForm from './ApplicationForm'; // Import the ApplicationForm

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // State to store selected job for applying

  // Fetch job listings from json-server
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error('Error fetching jobs:', error));
  }, []);

  const handleApply = (jobId) => {
    setSelectedJob(jobId); // Set the selected job when "Apply Now" is clicked
  };

  return (
    <div className="job-listings">
      <h2>Available Jobs</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Age Requirement:</strong> {job.ageRequirement} years old</p>
            <p><strong>Pay:</strong> {job.pay}</p>
            <p><strong>Description:</strong> {job.description}</p>
            <button onClick={() => handleApply(job.id)}>Apply Now</button>
          </div>
        ))}
      </div>

      {selectedJob && <ApplicationForm jobId={selectedJob} />} {/* Show application form for the selected job */}
    </div>
  );
};

export default JobListings;

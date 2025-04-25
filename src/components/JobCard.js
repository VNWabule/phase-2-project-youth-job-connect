import React from 'react';


function JobCard({ job }) {
  if (!job) return null; 

  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <p className="mt-2">{job.description}</p>
    </div>
  );
}

export default JobCard;

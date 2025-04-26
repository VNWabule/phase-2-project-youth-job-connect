import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [minPay, setMinPay] = useState('');
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem('userLoggedIn') === 'true'; 
    setIsLoggedIn(loggedIn);
    console.log("Is logged in:", loggedIn);
  }, []);

  const handleCardClick = (jobId) => {
    setSelectedJobId((prevId) => (prevId === jobId ? null : jobId)); 
  };

  const handleApplyClick = (jobId) => {
    if (isLoggedIn) {
      alert(`Applying for job ${jobId}`);
    } else {
      alert('Please log in to apply.');
    }
  };

  useEffect(() => {
    fetch('http://localhost:3001/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));

    fetch('http://localhost:3001/applications')
      .then((res) => res.json())
      .then((data) => setApplications(data))
      .catch((err) => console.error("Error fetching applications:", err));
  }, []);

  const companies = [...new Set(jobs.map(job => job.company))];

  const filteredJobs = jobs
    .filter(job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(job =>
      selectedCompany ? job.company === selectedCompany : true
    )
    .filter(job => {
      const numericPay = parseFloat(job.pay.replace(/[^0-9.]/g, ''));
      return minPay ? numericPay >= parseFloat(minPay) : true;
    });

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem', padding: '2rem' }}>
      {/* Sidebar (Filter Section) */}
      <div
        style={{
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        }}
      >
        <h2 style={{ marginBottom: '1rem' }}>Filter Jobs</h2>

        <input
          type="text"
          placeholder="Search jobs by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
        />

        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
        >
          <option value="">All Companies</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>{company}</option>
          ))}
        </select>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="payRange">Minimum Pay: ${minPay || 0}</label>
          <input
            id="payRange"
            type="range"
            min="0"
            max="100"
            step="5"
            value={minPay}
            onChange={(e) => setMinPay(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <button
          onClick={() => {
            setSearchTerm('');
            setSelectedCompany('');
            setMinPay('');
          }}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Job List Section */}
      <div style={{ flex: 1 }}>
        <h1>Available Jobs</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {filteredJobs.map((job) => (
            <JobCard 
              key={job.id}
              job={job}
              isSelected={selectedJobId === job.id}
              onCardClick={() => handleCardClick(job.id)}
            >
              {/* Conditionally render Apply button inside the JobCard */}
              <div style={{ marginTop: '1rem' }}>
                {isLoggedIn ? (
                  <button onClick={() => handleApplyClick(job.id)}>Apply</button>
                ) : (
                  <button disabled>Please log in to apply</button>
                )}
              </div>
            </JobCard>
          ))}
        </div>

        <h2 style={{ marginTop: '2rem' }}>Applications</h2>
        <ul>
          {applications.length === 0 ? (
            <li>No applications yet.</li>
          ) : (
            applications.map((app, index) => (
              <li key={index}>{JSON.stringify(app)}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default JobList;

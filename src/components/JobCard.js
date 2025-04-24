const JobCard = ({ job }) => {
    return (
      <div className="job-card">
        <h3>{job.title}</h3>
        <p>{job.company}</p>
        <p>{job.location}</p>
        <p>{job.description}</p>
      </div>
    );
  };
  
  export default JobCard; // ✅ default export
  
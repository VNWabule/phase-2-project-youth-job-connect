import React, { useState } from 'react';

const JobCard = ({ job, isSelected, onCardClick, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!job) {
    return null;
  }

  const handleLocalToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    onCardClick(); 
  };

  return (
    <div
      onClick={handleLocalToggleExpand}
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: isSelected ? '#e6f2ff' : '#fff', // Highlight if selected
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{job.title}</h3>
      <p style={{ margin: '0.5rem 0' }}><strong>Company:</strong> {job.company}</p>
      <p style={{ margin: '0.5rem 0' }}><strong>Pay:</strong> {job.pay}</p>

      {isExpanded && (
        <div style={{ marginTop: '1rem' }}>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Age Requirement:</strong> {job.ageRequirement}+</p>
          <p><strong>Category:</strong> {job.category}</p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>
      )}

      <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#555' }}>
        {isExpanded ? 'Click to collapse ▲' : 'Click to expand ▼'}
      </div>
      
      {/* Render children (Apply button) */}
      {children}
    </div>
  );
};

export default JobCard;

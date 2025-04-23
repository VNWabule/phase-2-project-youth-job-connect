import React, { useState } from 'react';


const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clientId: '',
    dob: null,
    address: '',
    education: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, dob: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Application Form</h2>

      <label>
        Name:* <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Email:* <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Client ID:* <br />
        <input
          type="text"
          name="clientId"
          value={formData.clientId}
          onChange={handleChange}
          required
        />
      </label>
      <br /><br />

      <label>
        Date of Birth:* <br />
        <DatePicker
          selected={formData.dob}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          placeholderText="Select your date of birth"
          maxDate={new Date()}
          showYearDropdown
          scrollableYearDropdown
          required
        />
      </label>
      <br /><br />

      <label>
        Address: <br />
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows="3"
        />
      </label>
      <br /><br />

      <label>
        Educational Background:* <br />
        <textarea
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows="3"
          required
        />
      </label>
      <br /><br />

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;

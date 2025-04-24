import React, { useState } from "react";
import styles from './ApplicationForm.module.css'; // Import the CSS module

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    clientId: "",
    dob: null,
    address: "",
    education: "",
  });

  const [formMode, setFormMode] = useState("signup");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({ ...prevData, dob: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formMode === "signup") {
      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Sign up successful! Now you can log in.");
      setFormData({
        name: "",
        email: "",
        password: "",
        clientId: "",
        dob: null,
        address: "",
        education: "",
      });
    } else if (formMode === "login") {
      // Check if email and password match the stored user data
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        alert("Login successful!");
        // Redirect to a different page or perform other actions here
      } else {
        alert("Incorrect email or password.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formHeader}>{formMode === "signup" ? "Sign Up" : "Log In"}</h2>
      
      {/* Name and email inputs for signup */}
      {formMode === "signup" && (
        <div className={styles.formGroup}>
          <label>
            Name: <br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}

      <div className={styles.formGroup}>
        <label>
          Email: <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {/* Password input for both signup and login */}
      <div className={styles.formGroup}>
        <label>
          Password: <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      {/* Sign-up only fields */}
      {formMode === "signup" && (
        <>
          <div className={styles.formGroup}>
            <label>
              Client ID: <br />
              <input
                type="text"
                name="clientId"
                value={formData.clientId}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              Date of Birth: <br />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              Address: <br />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              Educational Background: <br />
              <textarea
                name="education"
                value={formData.education}
                onChange={handleChange}
                rows="3"
                required
              />
            </label>
          </div>
        </>
      )}

      <button type="submit" className={styles.button}>
        {formMode === "signup" ? "Sign Up" : "Log In"}
      </button>

      <br /><br />
      
      {/* Toggle between signup and login */}
      <button type="button" onClick={() => setFormMode(formMode === "signup" ? "login" : "signup")} className={styles.toggleButton}>
        {formMode === "signup" ? "Already have an account? Log In" : "Don't have an account? Sign Up"}
      </button>
    </form>
  );
};

export default ApplicationForm;

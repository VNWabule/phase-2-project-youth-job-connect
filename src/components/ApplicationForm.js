import React, { useState } from 'react';


const ApplicationForm = ({ onSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    onSignup(newUser);
    setName("");
    setEmail("");
    setPassword("");
};

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Sign Up</button>
      </form>
  );
};
export default ApplicationForm;

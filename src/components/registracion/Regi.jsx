
import React, { useState } from 'react';
import "./Regi.scss"

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here, e.g., sending data to the server
    console.log('Registration form data:', formData);
  };

  return (
    <div>
      <div className="regcont">
        <div className="margO">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder='Username'
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
           placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
           placeholder='Password'
          
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default Registration;
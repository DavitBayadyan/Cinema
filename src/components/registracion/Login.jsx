
import React, { useState } from 'react';
import "./Regi.scss"
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here, e.g., sending data to the server for authentication
    console.log('Login form data:', formData);
  };

  return (
    <div>
       <div className="regcont">
        <div className="margO">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
          placeholder='Username'

            type="text"
            id="username"
            name="username"
            value={formData.username}
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
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login;
import { useState } from 'react';
import {usersignup} from '../../apis/auth.js';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    roles: 'user' // Default role
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await usersignup(formData);
      if (response.error) {
        setMessage(`Error 1: ${response.error}`);
      } else {
        setMessage(response.msg);
      }
      navigate('/login');
    } catch (error) {
      setMessage(`Error 2: ${error.message}`);
    }
  };

  const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));
  
  if(isAuthenticated){
    return <Navigate to='/' />
  }

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="roles" className="form-label">Roles</label>
          <select
            className="form-control"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="students">Students</option>
            <option value="teachers">Teachers</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <Link to='/Login'>Login</Link>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Register;

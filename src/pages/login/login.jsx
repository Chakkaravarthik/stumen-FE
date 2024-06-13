import  { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {usersignin} from '../../apis/auth.js';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  //useNavigate hook
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending data to a server.
    console.log(formData);
    const data = await usersignin(formData);
    if(data.code===1){
      localStorage.setItem('isAuthenticated', true);
      navigate('/')
    }if(data.code===0){
      alert('credentials wrong')
    }
    if(data.code===2){
      alert('user not found')
    }
    
  };

  const isAuthenticated = Boolean(localStorage.getItem('isAuthenticated'));
  
  if(isAuthenticated){
    return <Navigate to='/'/>
  }
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">Login</button>
        <Link to='/register'>Register</Link>
      </form>
    </div>
  );
};

export default Login;

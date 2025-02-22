import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: '',
    favoriteSport: '',
    newPassword: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === formData.email && user.favoriteSport === formData.favoriteSport) {
      if (formData.newPassword === formData.confirmPassword) {
        user.password = formData.newPassword;
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Password reset successfully.');
        navigate('/login');
      } else {
        toast.error('Passwords do not match.');
      }
    } else {
      toast.error('Invalid email or favorite sport.');
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Forgot Password</h2>
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
            <label htmlFor="favoriteSport" className="form-label">Favorite Sport</label>
            <input
              type="text"
              className="form-control"
              id="favoriteSport"
              name="favoriteSport"
              value={formData.favoriteSport}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPassword" className="form-label">New Password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
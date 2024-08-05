import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../features/user/userSlice';
import './LoginPage.scss';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth();
    const { email, password } = formData;

    signInWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);

    // console.log('formData_:', formData);
    // console.log('auth:', auth);

    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="form">
        <h1 className="form-title">Login</h1>
        <label htmlFor="email" className="form-label">
          Email
          <input
            id="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="User email"
            className="form-input"
          />
        </label>
        <label htmlFor="passsword" className="form-label">
          Password
          <input
            id='password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="User password"
            className="form-input"
          />
        </label>
        <button type="submit" className="btn-submit">Login</button>
        <p className="form-help-text">Or <Link to="/register">SingUp</Link></p>
      </form>
    </div>
  );
};

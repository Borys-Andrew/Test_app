import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setUser } from 'features/user/userSlice';
import './SingUpPage.scss';
import { useNavigate } from 'react-router-dom';

export const SingUpPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSingUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth();
    const { email, password } = formData;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        const token = await user.getIdToken();
        await updateProfile(user, {
          displayName: formData.userName as string,
        });

        dispatch(setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          token,
        }));
        console.log('FireBase => User:', user);

        navigate('/');
      })
      .catch(console.error);

    setFormData({
      email: '',
      userName: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSingUp} className="form">
        <h1 className="form-title">Registration</h1>
        <label htmlFor="userName" className="form-label">
          User Name
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleOnChange}
            placeholder="User name"
            className="form-input"
            min="4"
          />
        </label>
        <label htmlFor="email" className="form-label">
          Email Address
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
            placeholder="User email"
            className="form-input"
          />
        </label>
        <label htmlFor="password" className="form-label">
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
            placeholder="User password"
            className="form-input"
          />
        </label>
        <button type="submit" className="btn-submit">Register</button>
        <p className="form-help-text">Already have an Account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

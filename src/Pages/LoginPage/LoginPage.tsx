import React, { useState } from 'react';
import './LoginPage.scss';

export const LoginPage: React.FC = () => {
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('formData_:', formData);

    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="User name"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="User password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

import React, { useState } from 'react';
import './RegisterPage';

export const RegisterPage: React.FC = () => {
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('formData_:', formData);

    setFormData({
      email: '',
      userName: '',
      password: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleOnChange}
          placeholder="User name"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder="User email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
          placeholder="User password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

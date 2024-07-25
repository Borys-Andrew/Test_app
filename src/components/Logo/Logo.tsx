import React from 'react';
import logo from '../../assets/logo.svg';
import './Logo.scss';

export const Logo: React.FC = () => {
  return (
    <div className="logo-wrapper">
      <img src={logo} alt="Logo" className="logo-icon" />
      <span className="logo-text">Wallet</span>
    </div>
  );
};

import React from 'react';
import homeIcon from '../../assets/home-icon.svg';
import statisticIcon from '../../assets/statistic-icon.svg';
import currencyIcon from '../../assets/currency-icon.svg';
import './Navigation.scss';
import { Link } from 'react-router-dom';

export const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">
            <img
              src={homeIcon}
              alt="Naigation icon to Home page"
              className="nav-icon"
            />
            <span className="nav-title">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/statistics">
            <img
              src={statisticIcon}
              alt="Naigation icon to Statistics page"
              className="nav-icon"
            />
            <span className="nav-title">Statistics</span>
          </Link>
        </li>
        <li className="nav-item item-currency">
          <Link to="/currency">
            <img
              src={currencyIcon}
              alt="Naigation icon to Currency page"
              className="nav-icon"
            />
            <span className="nav-title">Currency</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

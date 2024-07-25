import React from 'react';
import exit from '../../assets/exit-icon.svg';
import './UserMenu.scss';

type Props = {
  user: string;
};

export const UserMenu: React.FC<Props> = ({ user }) => {
  return (
    <div className="side-menu">
      <span className="user-name">{user}</span>
      <button className="btn-exit">
        <img src={exit} alt="Exit button" />
        <span className="btn-exit__text">Exit</span>
      </button>
    </div>
  );
};

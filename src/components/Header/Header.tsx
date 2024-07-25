import React from 'react';
import { Logo } from '../Logo';
import { UserMenu } from '../UserMenu';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <div className="wrapper">
      <Logo />
      <UserMenu user="Andrew" />
    </div>
  );
};

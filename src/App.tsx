import React from 'react';
import './App.scss';
import 'normalize.css';
import { Header } from './components/Header';
import { CurrencyBox } from './components/CurrencyBox';

const currencies = [
  {
    id: '1',
    currency: 'USD',
    purchase: '41.40',
    sale: '41.85',
  },
  {
    id: '2',
    currency: 'EUR',
    purchase: '45.00',
    sale: '45.30',
  },
  {
    id: '3',
    currency: 'GBR',
    purchase: '52.00',
    sale: '53.98',
  },
];

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <CurrencyBox currencies={currencies} />
      <div className="www">1</div>
      <div className="aaa">2</div>
      <div className="qqq">3</div>
    </div>
  );
};

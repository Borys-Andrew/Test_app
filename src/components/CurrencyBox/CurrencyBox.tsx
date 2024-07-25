import React from 'react';
import { Currency } from '../../types/currency';
import './CurrencyBox.scss';

type Props = {
  currencies: Currency[];
};

export const CurrencyBox: React.FC<Props> = ({ currencies }) => {
  console.log(`currencies: ${currencies}`);

  return (
    <div className="currency-container">
      <ul className="header-list">
        <li className="header-item">Currency</li>
        <li className="header-item">Purchase</li>
        <li className="header-item">Sale</li>
      </ul>
      <ul className="currency-list">
        {currencies.map(({ id, currency, purchase, sale }) => (
          <li className="currency-item" key={id}>
            <span className="currency-item__value">{currency}</span>
            <span className="currency-item__value">{purchase}</span>
            <span className="currency-item__value">{sale}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

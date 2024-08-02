import { getCurrency } from 'api/currency';
import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from 'store/store';
import { Curr } from '../../types/currency';
import './CurrencyBox.scss';

const FILTERVALUES: { [key: number]: string } = {
  840: 'USD',
  978: 'EUR',
};

export const CurrencyBox: React.FC = () => {
  const [currency, setCurrency] = useState<Curr[]>([]);

  const fetchCurrencies = async () => {
    try {
      // setLoading(true);
      const data = await getCurrency();
      const filterData = data
        .filter(
          ({ currencyCodeA, currencyCodeB }) =>
            FILTERVALUES[currencyCodeA] && currencyCodeB === 980,
        )
        .map(({ currencyCodeA, rateBuy, rateSell }) => ({
          ccy: FILTERVALUES[currencyCodeA],
          buy: rateBuy,
          sale: rateSell,
        }));

      setCurrency(filterData);
    } catch (err) {
      console.error('Error fetching currencies:', err);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div className="currency-container">
      <ul className="header-list">
        <li className="header-item">Currency</li>
        <li className="header-item">Purchase</li>
        <li className="header-item">Sale</li>
      </ul>
      <ul className="currency-list">
        {currency.map(({ ccy, buy, sale }) => (
          <li className="currency-item" key={ccy}>
            <span className="currency-item__value">{ccy}</span>
            <span className="currency-item__value">{buy.toFixed(2)}</span>
            <span className="currency-item__value">{sale.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

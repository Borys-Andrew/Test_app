import React from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from './app/store';
import { CurrencyBox } from '../../components/CurrencyBox';
import { RootState } from '../../app/store';

export const CurrencyPage: React.FC = () => {
  const { currenciesList, isLoading, hasError } = useSelector(
    (state: RootState) => state.currency,
  );

  // console.log('currenciesList:', currenciesList);
  // console.log('isLoading:', isLoading);
  // console.log('hasError:', hasError);

  return (
    <div>
      <CurrencyBox />
    </div>
  );
};

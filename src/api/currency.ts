import { Currency } from '../types/currency';

const BASE_URL = 'https://api.monobank.ua/bank/currency';

export const getCurrency = async (): Promise<Currency[]> => {
  const response = await fetch(BASE_URL);
  const data: Currency[] = await response.json();

  console.log('log data from api', data);

  return data;
};

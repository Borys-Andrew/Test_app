export interface Curr {
  ccy: string;
  buy: number;
  sale: number;
}

export interface Currency {
  currencyCodeA: number;
  currencyCodeB: number;
  date: number;
  rateBuy: number;
  rateSell: number;
}

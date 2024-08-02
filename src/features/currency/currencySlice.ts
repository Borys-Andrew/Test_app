import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrency } from '../../api/currency';
// import { Curr } from 'types/currency';

const FILTERVALUES: { [key: number]: string } = {
  840: 'USD',
  978: 'EUR',
};

const fetchCurrency = createAsyncThunk('getCurrenciesData', async () => {
  const response = await getCurrency();

  console.log('log response from fetch', response);

  return response;
});

export interface CurrencyState {
  // currenciesList: Curr[];
  currenciesList: any; // see what you received
  isLoading: boolean;
  hasError: boolean;
}

const initialState: CurrencyState = {
  currenciesList: [],
  isLoading: false,
  hasError: false,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrency.pending, state => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCurrency.fulfilled, (state, action) => {
        state.isLoading = false;
        const filteredData = action.payload
          .filter(
            ({ currencyCodeA, currencyCodeB }) =>
              FILTERVALUES[currencyCodeA] && currencyCodeB === 980, //980 code is UAH by ISO 4217
          )
          .map(({ currencyCodeA, rateBuy, rateSell }) => ({
            ccy: FILTERVALUES[currencyCodeA],
            buy: rateBuy,
            sale: rateSell,
          }));

        state.currenciesList.push(...filteredData);
      })
      .addCase(fetchCurrency.rejected, state => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default currencySlice.reducer;

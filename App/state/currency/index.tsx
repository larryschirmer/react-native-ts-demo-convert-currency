import React, { FC, createContext, useState, useEffect } from 'react';

import { api } from '../../util';

type Defaults = {
  baseCurrency: string;
  quoteCurrency: string;
  rates: { [index: string]: number };
  fetchTime: string;
  changeCurrencyBase: (selectedCurrency: string) => void;
  changeCurrencyQuote: (selectedCurrency: string) => void;
  swapCurrencies: () => void;
};

const defaults: Defaults = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  rates: {},
  fetchTime: '',
  changeCurrencyBase: () => {},
  changeCurrencyQuote: () => {},
  swapCurrencies: () => {},
};

export const Context = createContext(defaults);

type Props = {};

const getRates = async (baseCurrency: string) => {
  return await api(`/latest?base=${baseCurrency}`);
};

export const Provider: FC<Props> = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState(defaults.baseCurrency);
  const [quoteCurrency, setQuoteCurrency] = useState(defaults.quoteCurrency);
  const [rates, setRates] = useState(defaults.rates);
  const [fetchTime, setFetchTime] = useState(defaults.fetchTime);

  const handleResponse = ({ rates = {}, date = '' }) => {
    setRates(rates);
    setFetchTime(date);
  };

  // fetch latested rates on load
  useEffect(() => {
    getRates(defaults.baseCurrency).then(handleResponse);
  }, []);

  const changeCurrencyBase = (selectedCurrency: string = '') => {
    setBaseCurrency(selectedCurrency);
    getRates(selectedCurrency).then(handleResponse);
  };

  const changeCurrencyQuote = (selectedCurrency: string = '') => {
    setQuoteCurrency(selectedCurrency);
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
    getRates(quoteCurrency).then(handleResponse);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    rates,
    fetchTime,
    changeCurrencyBase,
    changeCurrencyQuote,
    swapCurrencies,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

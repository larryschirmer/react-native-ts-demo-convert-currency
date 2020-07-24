import React, { FC, createContext, useState } from 'react';

const defaults = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  setBaseCurrency: (value: React.SetStateAction<string>) => {},
  setQuoteCurrency: (value: React.SetStateAction<string>) => {},
  swapCurrencies: () => {},
};

export const Context = createContext(defaults);

type Props = {};

export const Provider: FC<Props> = ({ children }) => {
  const [baseCurrency, setBaseCurrency] = useState(defaults.baseCurrency);
  const [quoteCurrency, setQuoteCurrency] = useState(defaults.quoteCurrency);

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

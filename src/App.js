import React from 'react';
import CurrencyList from './components/CurrencyList';
import Header from './components/Header';
import CurrencyContextProvider from './contexts/CurrencyContext';

function App() {
  return (
    <div className="App">
      <CurrencyContextProvider>
        <Header />
        <CurrencyList />
      </CurrencyContextProvider>
    </div>
  );
}

export default App;

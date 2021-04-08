import React from 'react';
import CurrencyList from './components/CurrencyList';
import CurrencyContextProvider from './contexts/CurrencyContext';

function App() {
  return (
    <div className="App">
      <CurrencyContextProvider>
        <CurrencyList />
      </CurrencyContextProvider>
    </div>
  );
}

export default App;

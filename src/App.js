import React from 'react';
import CurrencyList from './components/CurrencyList';
import Header from './components/Header';
import ItemDetails from './components/ItemDetails';
import CurrencyContextProvider from './contexts/CurrencyContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <CurrencyContextProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={CurrencyList} />
            <Route path="/details/:id" component={ItemDetails} />
          </Switch>
        </CurrencyContextProvider>
      </div>
    </Router>
  );
}

export default App;

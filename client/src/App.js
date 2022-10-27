import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/header/Header'
import Products from './components/mainContent/Pages'


function App() {
  return (
    <>
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Products />
        </div>
      </Router>
    </DataProvider>
    </>
  );
}

export default App;
import React from 'react';
import Home from './components/Home';
import TopGainers from './components/TopGainers';
import IntradayBuying from './components/IntradayBuying';
import OpenHigh from './components/OpenHigh';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CciReversal from './components/CciReversal';
import Rsi from './components/Rsi';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 >Stock Scan Parser :-</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top_gainers" element={<TopGainers />} />
          <Route path="/intraday_buying" element={<IntradayBuying />} />
          <Route path="/open_high" element={<OpenHigh />} />
          <Route path="/cci_reversal" element={<CciReversal />} />
          <Route path="/rsi_overbought" element={<Rsi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

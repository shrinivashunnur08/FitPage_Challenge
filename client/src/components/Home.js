import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="phone-section">
      <ul className="text-left mb-4 headers">
        <li>
          <Link to="/top_gainers">
            <div>Top gainers</div>
            <div className="subtext green">Intraday Bullish</div>
          </Link>
        </li>
        <li>
          <Link to="/intraday_buying">
            <div>Intraday buying seen in last 15 minutes</div>
            <div className="subtext green">Bullish</div>
          </Link>
        </li>
        <li>
          <Link to="/open_high">
            <div>Open = High</div>
            <div className="subtext green">Bullish</div>
          </Link>
        </li>
        <li>
          <Link to="/cci_reversal">
            <div>CCI Reversal</div>
            <div className="subtext red">Bearish</div>
          </Link>
        </li>
        <li>
          <Link to="/rsi_overbought">
            <div>RSI Overbought</div>
            <div className="subtext red">Bearish</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

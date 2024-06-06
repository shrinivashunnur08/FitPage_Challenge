import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './OpenHigh.css';

const OpenHigh = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/data.json')
      .then(response => response.json())
      .then(data => {
        const openHighData = data.find(item => item.name === 'Open = High');
        setData(openHighData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="phone-section">
      {data && (
        <>
          <ul className="text-left mb-4 headers"></ul>
          <li>
            <Link to="/top_gainers">
              <div className="top-gainers-title">{data.name} :-</div>
              <div className={`subtext ${data.color}`}>{data.tag}</div>
            </Link>
          </li>
          <ul>
            {data.criteria.map((criterion, index) => (
              <li key={index}>{criterion.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default OpenHigh;

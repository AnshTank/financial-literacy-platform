// frontend/components/FinancialTips.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FinancialTips = () => {
  const [tips, setTips] = useState([]);  // State to store the tips

  // Fetch financial tips from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/financial-tips')  // URL of the backend API
      .then(response => {
        setTips(response.data);  // Store the fetched tips in the state
      })
      .catch(error => {
        console.error("There was an error fetching the data:", error);
      });
  }, []);  // Empty dependency array means this runs only once when the component mounts

  return (
    <div>
      <h2>Financial Tips</h2>
      <ul>
        {tips.map(tip => (
          <li key={tip._id}>{tip.tip}</li>  // Render each tip
        ))}
      </ul>
    </div>
  );
};

export default FinancialTips;

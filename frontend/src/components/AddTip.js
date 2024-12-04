// frontend/components/AddTip.js
import React, { useState } from 'react';
import axios from 'axios';

const AddTip = () => {
  const [tip, setTip] = useState("");  // State to store the input value

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/financial-tips', { tip })  // Post the new tip to the backend
      .then(response => {
        alert("Tip added successfully!");  // Show success message
        setTip("");  // Reset the form input
      })
      .catch(error => {
        console.error("Error adding tip:", error);  // Log errors
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter financial tip"
        value={tip}
        onChange={(e) => setTip(e.target.value)}  // Update tip value on input change
      />
      <button type="submit">Add Tip</button>
    </form>
  );
};

export default AddTip;

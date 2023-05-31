import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Gold Rate Calculator</h1>
      <form>
        <label htmlFor="grams">Grams:</label>
        <input type="number" id="grams" name="grams" required />

        <label htmlFor="karat">Karat Value:</label>
        <input type="number" id="karat" name="karat" required />

        <label htmlFor="city">City Name:</label>
        <input type="text" id="city" name="city" required />

        <label htmlFor="cgst">CGST:</label>
        <input type="number" id="cgst" name="cgst" required />

        <label htmlFor="sgst">SGST:</label>
        <input type="number" id="sgst" name="sgst" required />

        <label htmlFor="labor">Labor Charges:</label>
        <input type="number" id="labor" name="labor" required />

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default App;

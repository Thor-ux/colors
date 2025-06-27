import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (hexColor.length === 7) {
      if (isValidHex(hexColor)) {
        const rgb = hexToRgb(hexColor);
        setRgbColor(`RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`);
        setError('');
        document.body.style.backgroundColor = hexColor;
      } else {
        setRgbColor('');
        setError('Error: Invalid HEX color');
        document.body.style.backgroundColor = 'white';
      }
    } else {
      setRgbColor('');
      setError('');
      document.body.style.backgroundColor = 'white';
    }
  }, [hexColor]);

  const handleInputChange = (e) => {
    setHexColor(e.target.value);
  };

  const isValidHex = (hex) => {
    return /^#[0-9A-F]{6}$/i.test(hex);
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  return (
    <div className="App">
      <div className="container">
        <h1>HEX to RGB Color Converter</h1>
        <input
          type="text"
          value={hexColor}
          onChange={handleInputChange}
          placeholder="Enter HEX color (e.g., #FF00FF)"
          maxLength="7"
        />
        {rgbColor && <div className="result">{rgbColor}</div>}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default App;
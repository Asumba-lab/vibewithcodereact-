import React, { useState } from 'react';
import DarkModeComponent from './DarkModeComponent';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div style={{ minHeight: '100vh', background: isDarkMode ? '#222' : '#f9f9f9', transition: 'background 0.3s' }}>
      <button
        onClick={toggleDarkMode}
        style={{
          margin: '20px',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          background: isDarkMode ? '#444' : '#ddd',
          color: isDarkMode ? '#fff' : '#222',
          cursor: 'pointer',
          transition: 'all 0.3s',
        }}
      >
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
      <DarkModeComponent isDarkMode={isDarkMode} />
    </div>
  );
}

export default App; 
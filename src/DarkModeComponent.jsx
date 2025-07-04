import React from 'react';

function DarkModeComponent({ isDarkMode }) {
  const style = {
    background: isDarkMode ? '#222' : '#f9f9f9',
    color: isDarkMode ? '#fff' : '#222',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    transition: 'all 0.3s',
    margin: '20px auto',
    maxWidth: '400px'
  };

  return (
    <div style={style}>
      {isDarkMode ? <h2>Dark Mode is ON 🌙</h2> : <h2>Light Mode is ON ☀️</h2>}
      <p>The current theme is <b>{isDarkMode ? 'Dark' : 'Light'}</b>.</p>
    </div>
  );
}

export default DarkModeComponent; 
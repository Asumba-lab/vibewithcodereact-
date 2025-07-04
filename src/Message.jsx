import React from 'react';

function Message({ text, author }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '8px 0', borderRadius: '6px' }}>
      <p style={{ margin: 0 }}>{text}</p>
      <small style={{ color: '#555' }}>— {author}</small>
    </div>
  );
}

export default Message; 
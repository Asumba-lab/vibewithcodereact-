import React from 'react';

function UserCard({ name, email, imageUrl }) {
  return (
    <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '10px', padding: '20px', maxWidth: '250px', textAlign: 'center', background: '#fff' }}>
      <img src={imageUrl} alt={name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }} />
      <h2 style={{ margin: '10px 0 5px' }}>{name}</h2>
      <p style={{ color: '#888', margin: 0 }}>{email}</p>
    </div>
  );
}

export default UserCard; 
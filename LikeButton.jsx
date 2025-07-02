import React from 'react';

function LikeButton({ onLike }) {
  return (
    <button onClick={onLike} style={{ padding: '8px 16px', borderRadius: '5px', background: '#ff4081', color: '#fff', border: 'none', cursor: 'pointer' }}>
      Like
    </button>
  );
}

export default LikeButton; 
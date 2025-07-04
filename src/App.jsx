import React, { useState } from 'react';
import DarkModeComponent from './DarkModeComponent';
import Counter from './Counter';
import LikeButton from './LikeButton';
import Message from './Message';
import UserCard from './UserCard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

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

      {/* Render Counter */}
      <Counter initialCount={5} />

      {/* Render LikeButton and show likes */}
      <div style={{ margin: '20px 0' }}>
        <LikeButton onLike={() => setLikes(likes + 1)} />
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>{likes} Likes</span>
      </div>

      {/* Render Message */}
      <Message text="This is a sample message!" author="Steve" />

      {/* Render UserCard */}
      <UserCard
        name="Jane Doe"
        email="jane@gmail.com"
        imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App; 
import React, { useState } from 'react';
import DarkModeComponent from './DarkModeComponent';
import Counter from './Counter';
import LikeButton from './LikeButton';
import Message from './Message';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className={`app-root${isDarkMode ? ' dark' : ''}`}>
      <div className="demo-container">
        <h1>Vibe with Code Components Demo</h1>
        <button
          onClick={toggleDarkMode}
          className="toggle-btn"
        >
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <DarkModeComponent isDarkMode={isDarkMode} />
        <div className="section">
          <Counter initialCount={5} />
        </div>
        <div className="section">
          <LikeButton onLike={() => setLikes(likes + 1)} />
          <span className="likes-count">{likes} Likes</span>
        </div>
        <div className="section">
          <Message text="This is a sample message!" author="Steve" />
        </div>
        <div className="section">
          <UserCard
            name="Jane Doe"
            email="jane@gmail.com"
            imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App; 
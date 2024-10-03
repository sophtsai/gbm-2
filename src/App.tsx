import React, { useState, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameClicks, setNameClicks] = useState(0);
  const [passwordClicks, setPasswordClicks] = useState(0);
  const nameImageRef = useRef<HTMLImageElement>(null);
  const passwordImageRef = useRef<HTMLImageElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const imageUrl = 'https://avatars.githubusercontent.com/u/77300333?v=4'; // Your image URL

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name && password && nameClicks === 5 && passwordClicks === 5) {
      setIsLoggedIn(true);
      setNameClicks(0);
      setPasswordClicks(0);
    }
  };

  const handleNameClick = () => {
    setNameClicks(nameClicks + 1);
    if (nameClicks === 1) {
      nameImageRef.current!.style.display = 'block';
    } else if (nameClicks === 6) {
      nameImageRef.current!.style.display = 'none';
      nameInputRef.current!.style.display = 'block'; // Show input after 5 clicks
    }
  };

  const handlePasswordClick = () => {
    setPasswordClicks(passwordClicks + 1);
    if (passwordClicks === 1) {
      passwordImageRef.current!.style.display = 'block';
    } else if (passwordClicks === 6) {
      passwordImageRef.current!.style.display = 'none';
      passwordInputRef.current!.style.display = 'block'; // Show input after 5 clicks
    }
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {name}! You have successfully logged in.</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <div onClick={handleNameClick}>
              <img
                src={imageUrl}
                alt="Click to show name input"
                ref={nameImageRef}
                style={{ display: 'none' }}
              />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameInputRef}
                style={{ display: 'none' }} // Initially hidden
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <div onClick={handlePasswordClick}>
              <img
                src={imageUrl}
                alt="Click to show password input"
                ref={passwordImageRef}
                style={{ display: 'none' }}
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordInputRef}
                style={{ display: 'none' }} // Initially hidden
              />
            </div>
          </div>
          <button type="submit">Enter</button>
        </form>
      )}
    </div>
  );
};

export default App;
import React, { useState, useRef } from 'react';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nameClicks, setNameClicks] = useState(0);
  const [passwordClicks, setPasswordClicks] = useState(0);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

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
      nameInputRef.current!.style.display = 'block';
    }
  };

  const handlePasswordClick = () => {
    setPasswordClicks(passwordClicks + 1);
    if (passwordClicks === 1) {
      passwordInputRef.current!.style.display = 'block';
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
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameInputRef}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <div onClick={handlePasswordClick}>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordInputRef}
                style={{ display: 'none' }}
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
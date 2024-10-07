import React, { useState } from 'react';
import Login from './Login';
import Registration from './Registration';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="app">
      {isRegistered ? (
        <Login onRegisterClick={() => setIsRegistered(false)} />
      ) : (
        <Registration onLoginClick={() => setIsRegistered(true)} />
      )}
    </div>
  );
}

export default App;

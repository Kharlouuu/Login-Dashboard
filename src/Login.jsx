import React from 'react';

function Login({ onRegisterClick }) {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div>
          <input type="password" placeholder="Your Password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <span onClick={onRegisterClick} style={{ color: 'blue', cursor: 'pointer' }}>
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;

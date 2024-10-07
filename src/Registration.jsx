import React from 'react';

function Registration({ onLoginClick }) {
  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form>
        <div>
          <input type="email" placeholder="Your Email" required />
        </div>
        <div>
          <input type="password" placeholder="Your Password" required />
        </div>
        <div>
          <input type="password" placeholder="Confirm Password" required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account?{' '}
        <span onClick={onLoginClick} style={{ color: 'blue', cursor: 'pointer' }}>
          Login
        </span>
      </p>
    </div>
  );
}

export default Registration;

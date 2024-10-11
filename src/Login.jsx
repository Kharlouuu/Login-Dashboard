import React from 'react';

function Login({ onRegisterClick }) {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label for="exampleInputEmail1" class="form-label mt-4">Email address <br></br></label>
          <input type="email" placeholder="Enter Email" required />
        </div>
        <div>
        <label for="exampleInputEmail1" class="form-label mt-4"><br></br>Password <br></br></label>
          <input type="password" placeholder="Enter Password" required />
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

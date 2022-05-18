import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
            
            <label>Email: </label>
            <input type="email" placeholder="Email Address" required/><br/>
            <label>Password: </label>
            <input type="password" placeholder="Password" required/><br/>
            <button variant="contained">SIGN IN</button>
      </div>
    );
  }
}

export default Login;
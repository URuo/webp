import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Page from './Page'
// import Login from './userprofile'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Login username="test" /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals()
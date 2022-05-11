import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloCGU from './cgu_hello';
import MultiButton from './cgu_multiButton';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() { 
  return (
    <div>
      <div>
        {HelloCGU()}
      </div>
      <div id = "btn">
        {MultiButton(10)}
      </div>
    </div> 
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

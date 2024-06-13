import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Root from './layout/Root';
// import AppClass from './components/AppClass';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Root />
    {/* <AppClass /> */}
  </React.StrictMode>
);   

// If you want to start measuring performan ce in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

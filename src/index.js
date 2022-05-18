import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import "./styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"))

// ReactDOM.render(
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

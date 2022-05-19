import React from 'react'
import ReactDOM from "react-dom/client"
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'
import "./styles/tailwind.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

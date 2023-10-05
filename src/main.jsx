import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './components/ErrorPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <ErrorPage/>
  </React.StrictMode>,
)

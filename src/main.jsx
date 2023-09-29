import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'

const logoUrl = '/assets/test.png';
const logo = 'TEAM 3';
const pages = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Products', url: '/all-product'},
  { name: 'Blog', url: '/blog'},
  { name: 'Contact Us', url: '/contact-us'},
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar logoUrl={logoUrl} logo = {logo} pages={pages} />
  </React.StrictMode>,
)

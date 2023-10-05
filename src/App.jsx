import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar.jsx'
import './index.css'
import Carousel from './components/Carousel.jsx'
import Card from './components/Card'
import ProductDetail from './components/ProductDetail'

const logoUrl = '/assets/test.png';
const logo = 'TEAM 3';
const pages = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Products', url: '/all-product'},
  { name: 'Blog', url: '/blog'},
  { name: 'Contact Us', url: '/contact-us'},
];

function App() {
  return (
    <>
      <NavBar logoUrl={reactLogo} logo = {logo} pages={pages} />
      <Card/>
      <ProductDetail/>
      <Carousel/>
    </>
  )
}

export default App

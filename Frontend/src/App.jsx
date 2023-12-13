import './App.css'
import './index.css'

import NavBar from './components/NavBar.jsx'
import Login from './components/Login.jsx'
import Carousel from './components/Carousel.jsx'
import Card from './components/Card'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Banner from './components/Banner'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import ProductsGrid from './components/ProductsGrid.jsx'
import Header from './components/Header.jsx'

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
      <Header className='fixed top-0 w-full z-10'/>
      {/* <NavBar logoUrl={reactLogo} logo = {logo} pages={pages} /> */}
      <Banner/>
      <ProductsGrid/>
      <Login/>
      <ErrorPage></ErrorPage>
      <Card/>
      <ProductDetail/>
      <Cart/>
      <Carousel/>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App

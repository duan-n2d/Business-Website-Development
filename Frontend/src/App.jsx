import reactLogo from './assets/react.svg'
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
      <ProductsGrid/>
      {/* <Login/> */}
      {/* <ErrorPage></ErrorPage> */}
      {/* <img src="https://vn.yamaha.com/vi/files/Brand_Image_Drums_pc_vn_f502df3148e42fb97023a31588e1d127.jpg?impolicy=resize&imwid=2000&imhei=800" alt="Background Test"/> */}
      {/* <Card/> */}
      {/* <ProductDetail/> */}
      {/* <Cart/> */}
      {/* <Carousel/> */}
      {/* <Banner/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App

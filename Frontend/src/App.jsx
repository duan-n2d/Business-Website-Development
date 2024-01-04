import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'

import Carousel from './components/Carousel.jsx'
import Card from './components/Card'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Banner from './components/Banner'
import ErrorPage from './components/ErrorPage'
import Blogs from './components/Blogs.jsx'
import BlogRec from './components/BlogRec'
import BlogDetail from './components/BlogDetail'

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
      {/* <NavBar logoUrl={reactLogo} logo = {logo} pages={pages} />
      <Banner/>
      <ErrorPage></ErrorPage>
      <Card/>
      <ProductDetail/>
      <Cart/>
      <Carousel/>
      <Banner/> */}
      {/* <Blogs></Blogs> */}
      <BlogDetail></BlogDetail>
      {/* <BlogRec></BlogRec> */}
    </>
  )
}

export default App

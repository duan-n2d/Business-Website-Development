import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'

import NavBar from './components/NavBar.jsx'
import Carousel from './components/Carousel.jsx'
import Card from './components/Card'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'
import Banner from './components/Banner'
import ErrorPage from './components/ErrorPage'
import ProductsGrid from './components/ProductsGrid.jsx'

const logo = 'TEAM 3';
const pages = [
 { name: 'Trang Chủ', url: '/',dt:[] },
  { name: 'Có Gì Mới', url: '/about-us' ,dt:['Bản tin','Blog']},
   { name: 'Thương Hiệu', url: '/all-product',dt:['Bản tin','Blog']},
   { name: 'Sản Phẩm', url: '/blog',dt:['Bản tin','Blog']},
   { name: 'Sale Off', url: '#',dt:[]},
   { name: 'Blog', url: '#',dt:['Bản tin','Blog']},
   { name: 'Về Gakki', url: '#',dt:['Bản tin','Blog']},
];

function App() {
  return (
    <>
      <NavBar logoUrl={reactLogo} logo = {logo} pages={pages} />
      <ErrorPage></ErrorPage>
      <img src="https://vn.yamaha.com/vi/files/Brand_Image_Drums_pc_vn_f502df3148e42fb97023a31588e1d127.jpg?impolicy=resize&imwid=2000&imhei=800" alt="Background Test"/>
      <ProductsGrid/>
      <Card/>
      {/* <ProductDetail/> */}
      <Cart/>
      <Carousel/>
      <Banner/>
    </>
  )
}

export default App

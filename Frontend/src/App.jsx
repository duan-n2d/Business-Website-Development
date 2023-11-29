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
import Footer from './components/Footer'

const logo = 'TEAM 3';
const pages = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Products', url: '/all-product'},
  { name: 'Blog', url: '/blog'},
  { name: 'Contact Us', url: '/contact-us'},
];

let slides = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhoFjnK4ie9GVjFy5MNnoOM68dpi9TGa2_Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW82xb7A6ac2dWp9zThqdrfz1KxO6iucdPDg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyatMSOXQTHvFwaP65UOpR7oTGxPBgWgkkA&usqp=CAU"
]
function App() {
  return (
    <>
      <NavBar logoUrl={reactLogo} logo = {logo} pages={pages} />
      <ErrorPage></ErrorPage>
      <img src="https://vn.yamaha.com/vi/files/Brand_Image_Drums_pc_vn_f502df3148e42fb97023a31588e1d127.jpg?impolicy=resize&imwid=2000&imhei=800" alt="Background Test"/>
      <Card/>
      {/* <ProductDetail/> */}
      <Cart/>
      <div className='w-[20%] m-auto pt-11' autoSlide={true} autoSlideInterval={3000}>
        <Carousel slides={slides}/>
      </div>
      <Banner/>
      <Footer/>
    </>
  )
}

export default App

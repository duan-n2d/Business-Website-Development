import './App.css'

import {Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import AllProduct from './pages/AllProduct'
import Admin from './pages/Admin'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Checkout from './pages/Checkout'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import LandingPage from './pages/LandingPage'
import PolicyPage from './pages/PolicyPage'
import UserProfile from './pages/UserProfile'
import Product from './pages/Product'
import Cart from './pages/Cart'


function App() {
  // const user = useSelector(state => state.user)
  return (
    <>
      <Routes className = 'root font-nunito '>
        <Route path='/' element={<Home/>} />
        <Route path='/all-products' element={<AllProduct/>} />
        <Route path='/products/brand/:id' element={<AllProduct/>} />
        <Route path='/products/category/:id' element={<AllProduct/>} />
        <Route path='/check-out' element={<Checkout/>} />
        <Route path='/landing' element={<LandingPage/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/policy/:id?' element={<PolicyPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/profile' element={<UserProfile/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/404' element={<ErrorPage/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/product/:id' element={<Product/>} />
      </Routes>
    </>
  )
}

export default App

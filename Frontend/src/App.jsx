import './App.css'

import {Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import AllProduct from './pages/AllProduct'
import Admin from './pages/Admin'
import AboutUs from './pages/AboutUs'
import Checkout from './pages/Checkout'
import Blog from './pages/Blog'
import LandingPage from './pages/LandingPage'


function App() {
  // const user = useSelector(state => state.user)
  return (
    <>
      <Routes className = 'root font-nunito '>
        <Route path='/' element={<Home/>} />
        <Route path='/all-products' element={<AllProduct/>} />
        <Route path='/check-out' element={<Checkout/>} />
        <Route path='/landing' element={<LandingPage/>} />
        <Route path='/blogs' element={<Blog/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </>
  )
}

export default App

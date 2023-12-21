import './App.css'

import {Routes, Route} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Admin from './pages/Admin'
import AdminOrder from './components/AdminOrder'


function App() {
  // const user = useSelector(state => state.user)
  return (
    <AdminOrder/>
  )
}

export default App

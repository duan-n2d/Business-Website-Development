import reactLogo from "./assets/react.svg";
import "./App.css";
import "./index.css";

import NavBar from "./components/NavBar.jsx";
import Carousel from "./components/Carousel.jsx";
import Card from "./components/Card";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart";
import Banner from "./components/Banner";
import ErrorPage from "./components/ErrorPage";
import AboutUs from "./components/AboutUs.jsx";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Cart></Cart>
    </>
  );
}

export default App;

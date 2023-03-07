import { useEffect, useState } from 'react';
import './App.css';
import Banner from './components/BannerComponent/Banner';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBarComponent/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const savedCart = localStorage.getItem('cart')

  const [cart, updateCart] = useState(savedCart?JSON.parse(savedCart) : [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <div className='App'>
      <Banner />
      <NavBar  cart={cart} updateCart={updateCart}/>
      <Footer />
    </div>
  );
}

export default App;

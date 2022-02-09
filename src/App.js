import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Item from './components/Item';
import { About } from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { useState } from "react";
import { CartProvider } from "react-use-cart"

function App() {

const [cartItems, setCartItems] = useState([]);

function addItemtoCart(product){
  setCartItems([...cartItems, product])
}

  return (
    <div>
      <CartProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/products/:id" component={Item} />
        <Route exact path="/cart" component={Cart} />
        <Home />
        <About />
        <Contact />
        <Cart />
      </Switch>
      </CartProvider>
    </div>
  )
}

export default App;

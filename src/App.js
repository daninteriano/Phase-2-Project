import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';
import Item from './components/Item';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Item} />
        <Home />
      </Switch>
    </div>
  )
}

export default App;

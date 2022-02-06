import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="products" component={Products} />
        <Home />
      </Switch>
    </div>
  )
}

export default App;

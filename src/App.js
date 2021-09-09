import './App.css';
import Login from './components/Login'
import Signup from './components/Signup'
import Checkout from './components/Checkout'
import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute"
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <ProtectedRoute path="/product" component={ProductCard}/>
        <ProtectedRoute path="/Checkout" component={Checkout}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;

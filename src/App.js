import { Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Cart from "./components/Cart/Cart";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import ProductCategory from "./components/Product/ProductCategory";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute path="/product" component={ProductCategory} />
        <ProtectedRoute path="/Cart" component={Cart} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;

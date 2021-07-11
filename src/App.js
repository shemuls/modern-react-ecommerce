import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Shop } from "./containers/Shop/Shop.jsx";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Cart } from "./containers/Cart/Cart.jsx";
import { createContext } from "react";
import fakeData from "./fakeData/index";

export const ModernEcommerceContext = createContext();

function App() {
  const product12 = fakeData.splice(0, 12);
  const [products, setproducts] = useState(product12);
  const [cart, setcart] = useState([]);

  return (
    <ModernEcommerceContext.Provider
      value={[products, setproducts, cart, setcart]}
    >
      <Router>
        <Header />
        <Body>
          <Switch>
            <Route exact path="/">
              <Shop />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <h1>4O4 Errors</h1>
            </Route>
          </Switch>
        </Body>
        <Footer />
      </Router>
    </ModernEcommerceContext.Provider>
  );
}

export default App;

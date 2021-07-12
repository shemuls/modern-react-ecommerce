import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Shop } from "./containers/Shop/Shop.jsx";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./containers/Cart/Cart.jsx";
import { createContext } from "react";
import fakeData from "./fakeData/index";
import { getDatabaseCart } from "./utilities/DatabaseManager.js";

export const ModernEcommerceContext = createContext();

function App() {
  const product12 = fakeData.slice(0, 12);
  const [products, setproducts] = useState(product12);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const savedProductKeys = Object.keys(savedCart);

    const getCartTotalProducts = savedProductKeys.map((singleKey) => {
      const getCartProduct = fakeData.find((pd) => pd.key === singleKey);
      getCartProduct.quantity = savedCart[singleKey];

      return getCartProduct;
    });
    setcart(getCartTotalProducts);
  }, []);

  return (
    <ModernEcommerceContext.Provider
      value={{
        products: products,
        setproducts: setproducts,
        cart: cart,
        setcart: setcart,
      }}
    >
      <Router>
        <Header />
        <Body>
          <Switch>
            <Route exact path="/">
              {products.length === 0 ? (
                <h2 className="text-center p-5">Loading....</h2>
              ) : (
                <Shop />
              )}
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

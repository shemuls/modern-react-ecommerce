import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { Shop } from "./containers/Shop/Shop.jsx";
import { Footer } from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Cart } from "./containers/Cart/Cart.jsx";
import { createContext } from "react";
import fakeData from "./fakeData/index";
import { getDatabaseCart } from "./utilities/DatabaseManager.js";
import { Shipping } from "./components/Shipping/Shipping.jsx";
import { AuthArea } from "./components/Authentication/AuthArea.jsx";
import { PrivateRoute } from "./components/Authentication/PrivateRoute/PrivateRoute.jsx";

export const ModernEcommerceContext = createContext();

function App() {
  const product12 = fakeData.slice(0, 12);
  const [products, setproducts] = useState(product12);
  const [cart, setcart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({
    isSingedUser: false,
    email: "",
    displayName: "",
    photoUrl: "",
    error: "",
    succes: "",
  });

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
        loggedInUser: loggedInUser,
        setLoggedInUser: setLoggedInUser,
      }}
    >
      <Router>
        <Header />
        {loggedInUser.email ? loggedInUser.email : loggedInUser.error}
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
            {/* <Route path="/shipping">
              <Shipping />
            </Route> */}
            <Route path="/login">
              <AuthArea />
              {loggedInUser.email && <Redirect to="/" />}
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping />
            </PrivateRoute>
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

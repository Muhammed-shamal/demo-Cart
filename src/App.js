import React, { useContext } from "react";
import "./App.css";
import Home from "./Main-Part/Home";
import Electronics from "./componets/Electronics/electronics";
import Navbar from "./componets/Navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jwelery from "./componets/jwellery/jwellery";
import WomenFashion from "./componets/Fashions/women's fashion/womenfashion";
import MenFashion from "./componets/Fashions/men's fashion/menfashion";
import Products from "./store/PostContext";
import AddToCart from "./store/addToCartContext";
import View from "./componets/ViewPage/view";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { AuthContext, FirebaseContext } from "./store/AuthContext";
import Cart from "./componets/shoppingCart/Cart";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  firebase.auth().onAuthStateChanged((user) => {
    setUser(user);
  });

  return (
    <Products>
      <AddToCart>
        <div className="container">
          <header className="App-header">
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/electronicDevices" element={<Electronics />} />
                <Route path="/view" element={<View />} />
                <Route path="/jewelery" element={<Jwelery />} />
                <Route path="/menfashion" element={<MenFashion />} />
                <Route path="/womenfashion" element={<WomenFashion />} />
                <Route path="/shoppingCart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
          </header>
        </div>
      </AddToCart>
    </Products>
  );
}

export default App;

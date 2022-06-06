import "./App.css";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";
import NotFoundPage from "./components/NotFoundPage";
import { useEffect } from "react";
import Login from "./components/Login";
import { auth } from "./components/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./components/StateProvider";
import Payment from "./components/Payment";
import Header from "./components/Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders';

const promise = loadStripe(
  "pk_test_51L4Kv1IH65Anmcz3jpD1iuqS0sed0f89MYVmW7Zj89EExfeC0jeYctJwq7EeAWNB9tNh0LbkDTZZiboAq5QEuDFf006zslsUIK"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      // console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is signed out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

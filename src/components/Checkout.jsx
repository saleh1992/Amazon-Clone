import "../components/Checkout.css";
import Banner from "../images/banner.jpg";
import Subtotal from "./Subtotal";
import React from "react";

import { useStateValue } from "./StateProvider";
import StarRateIcon from "@material-ui/icons/StarRate";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(user);
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img className="checkout__ad" src={Banner} alt="" />
          <div>
            <h1 className="checkout__userName">
              {user
                ? " Hello, " + user.email.substring(0, user.email.indexOf("@"))
                : ""}
            </h1>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item,i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

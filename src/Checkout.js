import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/XCMFlip/AF/V1/IDBI-scroll-1400x282.jpg"
          alt="ad_image"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {/* BasketItem */}
          {/* BasketItem */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

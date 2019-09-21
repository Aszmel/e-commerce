import React from "react";

import CustomButton from "../custom-button/CustomButton";

import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-item">cart items for now text only... :)</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

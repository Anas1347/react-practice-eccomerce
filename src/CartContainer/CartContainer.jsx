import React from "react";
import Cart from "../Cart/Cart";
import About from "../About/About";

const CartContainer = ({ handleIsActiveStates, isActive }) => {
  return (
    <div>
      <div className="my-4">
        <h3>CartContainer</h3>
      </div>
      <div className="flex justify-between ">
        <button
          onClick={() => handleIsActiveStates("cart")}
          className={`${isActive.cart ? "btn btn-accent mx-4" : "btn mx-4"}`}
        >
          Cart
        </button>

        <button
          onClick={() => handleIsActiveStates("about")}
          className={`${isActive.cart ? "btn  " : "btn btn-accent "}`}
        >
          About
        </button>
      </div>
      {isActive.cart ? <Cart></Cart > : <About></About>}
    </div>
  );
};

export default CartContainer;

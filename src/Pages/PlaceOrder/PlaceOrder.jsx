import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../components/context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title"> Delivery Information </p>
        <div className="multi-fields">
          <input
            name="firstName"
            type="text"
            placeholder="First name"
            required
          />
          <input name="lastName" type="text" placeholder="Last name" required />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Enter Email address"
          required
        />
        <input name="street" type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input name="city" type="text" placeholder="City" required />
          <input name="state" type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input name="zipcode" type="text" placeholder="ZIP Code" required />
          <input name="country" type="text" placeholder="Country" required />
        </div>
        <input name="phone" type="text" placeholder="Phone" required />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p> Subtotal </p>
              <p> ${getTotalCartAmount()} </p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p> Delivery Fee </p>
              <p> ${getTotalCartAmount() === 0 ? 0 : 2} </p>
            </div>
            <div className="cart-total-details">
              <p> Total </p>
              <p> ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2 }</p>
            </div>
          </div>
          <button type="submit"> PROCEED TO PAYMENT </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;

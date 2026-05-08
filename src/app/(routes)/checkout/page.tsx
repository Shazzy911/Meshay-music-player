import React, { useState } from "react";
import style from "./Checkout.module.scss";
import Link from "next/link";
import Image from "next/image";
const cartItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "/headphones.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Smart Speaker",
    price: 80,
    image: "/speaker.jpg",
    quantity: 1,
  },
];

const Checkout = () => {
  const [shipping, setShipping] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={style.checkoutContainer}>
      <h1>Checkout</h1>

      {/* Cart Summary */}
      <div className={style.section}>
        <h2>Cart Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} className={style.cartItem}>
            <Image src={item.image} alt={item.name} width={400} height={400} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}
        <h3>Total: ${totalPrice}</h3>
      </div>

      {/* Shipping Information */}
      <div className={style.section}>
        <h2>Shipping Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleShippingChange}
          required
        />
        <input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          onChange={handleShippingChange}
          required
        />
      </div>

      {/* Payment Method */}
      <div className={style.section}>
        <h2>Payment Method</h2>
        <label>
          <input
            type="radio"
            value="credit_card"
            checked={paymentMethod === "credit_card"}
            onChange={() => setPaymentMethod("credit_card")}
          />
          Credit Card
        </label>
        <label>
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
          />
          PayPal
        </label>
      </div>

      {/* Order Summary */}
      <div className={style.orderSummary}>
        <h2>Order Summary</h2>
        <p>Subtotal: ${totalPrice}</p>
        <p>Shipping: Free</p>
        <p>
          <strong>Total: ${totalPrice}</strong>
        </p>
        <button onClick={handlePlaceOrder} className={style.placeOrderButton}>
          Place Order
        </button>
      </div>

      <Link href="/cart">
        <button className={style.backToCart}>Back to Cart</button>
      </Link>
    </div>
  );
};

export default Checkout;

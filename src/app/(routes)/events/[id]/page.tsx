"use client";
import React, { useState } from "react";
import style from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

const tickets = [
  // {
  //   id: 1,
  //   event: "Rock Fest 2024",
  //   price: 150,
  //   image:
  //     "https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJvY2slMjBGZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
  //   quantity: 1,
  // },
  {
    id: 1,
    event: "Jazz Night",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1619229665486-19f7ee2987a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJvY2slMjBGZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D",
    quantity: 2,
  },
];

const Page = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    alert("Tickets booked successfully!");
  };

  const totalPrice = tickets.reduce(
    (total, ticket) => total + ticket.price * ticket.quantity,
    0
  );

  return (
    <div className={style.checkoutContainer}>
      <h1>Checkout</h1>

      {/* Ticket Summary */}
      <div className={style.section}>
        <h2>Ticket Summary</h2>
        {tickets.map((ticket) => (
          <div key={ticket.id} className={style.cartItem}>
            <Image
              src={ticket.image}
              alt={ticket.event}
              height={400}
              width={400}
            />
            <div>
              <h3>{ticket.event}</h3>
              <p>Price: ${ticket.price}</p>
              <p>Quantity: {ticket.quantity}</p>
            </div>
          </div>
        ))}
        <h3>Total: ${totalPrice}</h3>
      </div>

      {/* Booking Details */}
      <div className={style.section}>
        <h2>Booking Details</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleDetailsChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleDetailsChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleDetailsChange}
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
        <p>Service Fee: Free</p>
        <p>
          <strong>Total: ${totalPrice}</strong>
        </p>
        <button onClick={handlePlaceOrder} className={style.placeOrderButton}>
          Book Tickets
        </button>
      </div>

      <Link href="/events">
        <button className={style.backToEvents}>Back to Events</button>
      </Link>
    </div>
  );
};

export default Page;

import React from "react";
import Link from "next/link";
import style from "./page.module.scss";
import Image from "next/image";
const events = [
  {
    id: 1,
    title: "Live Concert: Coldplay",
    date: "March 15, 2025",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtdXNpY3xlbnwwfHwwfHx8MA%3D%3D",
    price: "$50",
  },
  {
    id: 2,
    title: "Jazz Night with Norah Jones",
    date: "April 10, 2025",
    image:
      "https://plus.unsplash.com/premium_photo-1676208754524-d27660432d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UWF3YWxpJTIwbmlnaHR8ZW58MHx8MHx8fDA%3D",
    price: "$40",
  },
  {
    id: 3,
    title: "Rock Festival 2025",
    date: "May 20, 2025",
    image:
      "https://images.unsplash.com/photo-1508749797192-efdd22441d42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9jayUyMEZlc3RpdmFsfGVufDB8fDB8fHww",
    price: "$60",
  },
];

const page = () => {
  return (
    <div className={style.eventsContainer}>
      <h1>Upcoming Music Events</h1>
      <div className={style.grid}>
        {events.map((event) => (
          <div key={event.id} className={style.card}>
            <Image
              src={event.image}
              alt={event.title}
              height={250}
              width={400}
            />
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p className={style.price}>{event.price}</p>
            <Link href={`/events/${"22"}`}>
              <button className={style.detailsButton}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

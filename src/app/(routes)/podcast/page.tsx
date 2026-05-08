import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

const podcasts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1679079456789-f60b497672bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1583127812417-7c06e950a432?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1679079456027-7afd22d1c2e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxwb2RjYXN0fGVufDB8fDB8fHww",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1680037568203-08fb7b56926b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHBvZGNhc3R8ZW58MHx8MHx8fDA%3D",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1607805074641-3846c72ed294?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxwb2RjYXN0fGVufDB8fDB8fHww",
    viewers: "1.7k viewers",
    title: "Say Yes to Heaven",
    button: "Live",
  },
];

const Podcasts = () => {
  return (
    <main className={styles.podcastContainer}>
      <div className={styles.podcastPage}>
        <h1>The Future of AI</h1>
        <iframe
          width="100%"
          height="500px"
          src="https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/videos/video2.mp4"
          title="The Future of AI"
          allowFullScreen
        ></iframe>
        <p>Exploring how AI is shaping the world.</p>
      </div>

      <h1>Latest Video Podcasts</h1>
      <div className={styles.podcastGrid}>
        {podcasts.map((podcast) => (
          <Link
            key={podcast.id}
            href={`/podcast/${podcast.id}`}
            className={styles.podcastCard}
          >
            <Image
              height={200}
              width={200}
              src={podcast.image}
              alt={podcast.title}
            />
            <h3>{podcast.title}</h3>
            {/* <p>{podcast.description}</p> */}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Podcasts;

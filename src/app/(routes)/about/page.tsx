import React from "react";
import Image from "next/image";
import style from "./page.module.scss";
import Button from "@/components/ui/small/button/Button";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      {/* Hero Section */}
      <section className={style.heroSection}>
        <h1>Discover the Future of Music</h1>
        <p>Stream, explore, and experience music like never before.</p>
      </section>

      {/* Mission Section */}
      <section className={style.missionSection}>
        <h2>Our Mission</h2>
        <p>
          Our goal is to provide a seamless music streaming experience,
          connecting artists and listeners worldwide.
        </p>
      </section>

      {/* Features Section */}
      <section className={style.featuresSection}>
        <h2>Why Choose Us?</h2>
        <div className={style.featuresGrid}>
          <div className={style.featureBox}>
            <h3>Unlimited Music</h3>
            <p>Stream millions of songs without limits.</p>
          </div>
          <div className={style.featureBox}>
            <h3>High-Quality Audio</h3>
            <p>Enjoy crystal-clear sound with lossless audio.</p>
          </div>
          <div className={style.featureBox}>
            <h3>Personalized Playlists</h3>
            <p>AI-powered playlists tailored to your taste.</p>
          </div>
          <div className={style.featureBox}>
            <h3>Offline Mode</h3>
            <p>Download your favorite songs for offline listening.</p>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className={style.teamSection}>
        <h2>Meet the Team</h2>
        <div className={style.teamGrid}>
          <div className={style.teamMember}>
            <Image
              src="https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/images/user/86a07e3b164b111c46711111ebf67096.jpg"
              alt="Team Member"
              width={100}
              height={100}
            />
            <p>Faraz Khan - CEO</p>
          </div>
          <div className={style.teamMember}>
            <Image
              src="https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/images/user/jpg%20(1)-modified.png"
              alt="Team Member"
              width={100}
              height={100}
            />
            <p>Shahzaib Saleem - Lead Developer</p>
          </div>
        </div>
      </section>

      {/* Call-To-Action */}
      <section className={style.ctaSection}>
        <h2>Join Us Today!</h2>
        <p>Sign up and start your musical journey.</p>
        {/* <button className={style.ctaButton} >Get Started</button> */}
        <Button
          text="Get Started"
          style={{
            padding: "12 30px",
            color: "#fff",
            fontSize: "1.4rem",
            fontWeight: "bold",

            border: "none",
            borderRadius: "none",
            cursor: "pointer",
            transition: "0.3s",
          }}
        />
      </section>
    </div>
  );
};

export default About;

import Image from "next/image";
import React from "react";
import style from "./page.module.scss";

const page = () => {
  return (
    <div className={style.profileContainer} style={{ color: "white" }}>
      {/* User Info Section */}
      <div className={style.profileHeader}>
        <Image
          src="https://zckzxwurwibtoteccdta.supabase.co/storage/v1/object/public/music-store/images/user/jpg%20(1)-modified.png"
          alt="User Avatar"
          width={100} // Set your desired width
          height={100} // Set your desired height
          className={style.profileAvatar}
        />
        <div className={style.profileInfo}>
          <h1>Shahzaib Saleem</h1>
          <p>Shazzy.mern@gmail.com</p>
          <div className={style.profileStats}>
            <span>1.2K Followers</span> • <span>300 Following</span>
          </div>
        </div>
      </div>

      {/* User Stats */}
      <div className={style.profileStatsContainer}>
        <div className={style.statBox}>
          <h3>Playlists</h3>
          <p>24</p>
        </div>
        <div className={style.statBox}>
          <h3>Liked Songs</h3>
          <p>156</p>
        </div>
        <div className={style.statBox}>
          <h3>Albums</h3>
          <p>12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={style.profileContent}>
        <h2>Recently Played</h2>
        <div className={style.recentlyPlayed}>
          <div className={style.song}>
            <Image
              src="https://images.unsplash.com/photo-1738360220249-818ba9624488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              alt="Song Cover"
              width={100} // Set your desired width
              height={100} // Set your desired height
              className={style.songCover}
            />
            <div className={style.songInfo}>
              <h4>Blinding Lights</h4>
              <p>The Weeknd</p>
            </div>
          </div>
          <div className={style.song}>
            <Image
              src="https://images.unsplash.com/photo-1738360220249-818ba9624488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              alt="Song Cover"
              width={100} // Set your desired width
              height={100} // Set your desired height
              className={style.songCover}
            />
            <div className={style.songInfo}>
              <h4>Save Your Tears</h4>
              <p>The Weeknd</p>
            </div>
          </div>
        </div>

        <h2>Favorite Artists</h2>
        <div className={style.favoriteArtists}>
          <div className={style.artist}>
            <Image
              src="https://images.unsplash.com/photo-1738360220249-818ba9624488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist"
              width={200} // Set your desired width
              height={200} // Set your desired height
              className={style.artistImg}
            />
            <p>The Weeknd</p>
          </div>
          <div className={style.artist}>
            <Image
              src="https://images.unsplash.com/photo-1738360220249-818ba9624488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist"
              width={200} // Set your desired width
              height={200} // Set your desired height
              className={style.artistImg}
            />
            <p>Drake</p>
          </div>
          <div className={style.artist}>
            <Image
              src="https://images.unsplash.com/photo-1738360220249-818ba9624488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist"
              width={200} // Set your desired width
              height={200} // Set your desired height
              className={style.artistImg}
            />
            <p>Ariana Grande</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

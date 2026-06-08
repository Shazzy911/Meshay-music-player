"use client";

import Image from "next/image";
import style from "./page.module.scss";
import { useAuth } from "@/context/authContext";

const Page = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className={style.profileContainer}>
        <div className={style.skeletonHeader} />
        <div className={style.skeletonStats} />
      </div>
    );
  }

  if (!user) {
    return (
      <div className={style.profileContainer}>
        <p style={{ color: "white" }}>You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className={style.profileContainer}>
      {/* User Info Section */}
      <div className={style.profileHeader}>
        {user.image ? (
          <Image
            src={user.image}
            alt={user.username}
            width={100}
            height={100}
            className={style.profileAvatar}
          />
        ) : (
          <div className={style.profileAvatarFallback}>
            {user.username?.charAt(0).toUpperCase()}
          </div>
        )}
        <div className={style.profileInfo}>
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      </div>

      {/* User Stats */}
      <div className={style.profileStatsContainer}>
        <div className={style.statBox}>
          <h3>Playlists</h3>
          <p>0</p>
        </div>
        <div className={style.statBox}>
          <h3>Liked Songs</h3>
          <p>0</p>
        </div>
        <div className={style.statBox}>
          <h3>Albums</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Page;

// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
import Link from "next/link";
import React from "react";
import "./page.scss";
const LogInForm = React.lazy(
  () => import("@/components/layout/login-form/LogInForm"),
);
const page = () => {
  return (
    <main className="login">
      <div className="card">
        <div className="left">
          <h1>Meshay Music</h1>
          <p>
            Meshay is built for music lovers who want more than just streaming.
            Explore iconic artists, timeless albums, and playlists that match
            every mood.
          </p>
          <span>
            Dont you have an account?{" "}
            <Link href="/" style={{ textDecoration: "none" }}>
              {" "}
              <p className="bypass">Click Proxy</p>{" "}
            </Link>
          </span>
          <Link href="/register">
            <button>Register </button>
          </Link>
        </div>
        <div className="right">
          <h1>Log In</h1>
          <LogInForm />
        </div>
      </div>
    </main>
  );
};

export default page;

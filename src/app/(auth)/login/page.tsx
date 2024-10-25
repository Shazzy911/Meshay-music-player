// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
import Link from "next/link";

import "./page.scss";
import LogInForm from "@/components/layout/login-form/LogInForm";

const page = () => {
  // const { login } = useContext(AuthContext);

  // const handleLogin = () => {
  //   login();
  // };

  return (
    <main className="login">
      <div className="card">
        <div className="left">
          <h1>Meshay Music</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
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

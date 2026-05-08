import RegisterForm from "@/components/layout/register-form/RegisterForm";
import "./page.scss";
import Link from "next/link";
export default function Page() {
  return (
    <main className="register">
      <div className="card">
        <div className="left">
          <h1>Meshay Music</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link href="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
}

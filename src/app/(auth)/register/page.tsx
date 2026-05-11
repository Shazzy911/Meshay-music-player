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
            Meshay brings your favorite music, artists, and albums together in
            one seamless experience. Discover new sounds, build playlists, and
            stream the music you love anytime, anywhere.
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

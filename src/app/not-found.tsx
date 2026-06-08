import Link from "next/link";
import styles from "./styles/not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.glowOrb} />

      <div className={styles.content}>
        <div className={styles.codeWrap}>
          <span className={styles.four}>4</span>
          <div className={styles.vinyl}>
            <div className={styles.vinylInner}>
              <div className={styles.vinylCenter} />
            </div>
            <div className={styles.vinylReflect} />
          </div>
          <span className={styles.four}>4</span>
        </div>

        <div className={styles.waveBar}>
          {Array.from({ length: 24 }).map((_, i) => (
            <span
              key={i}
              className={styles.bar}
              style={{ animationDelay: `${(i * 0.08).toFixed(2)}s` }}
            />
          ))}
        </div>

        <h1 className={styles.heading}>Track not found</h1>
        <p className={styles.sub}>
          Looks like this page skipped the playlist. It may have been removed,
          or the link is off-beat.
        </p>

        <Link href="/" className={styles.btn}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Back to home
        </Link>
      </div>
    </div>
  );
}

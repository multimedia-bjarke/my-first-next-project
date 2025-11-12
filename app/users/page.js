import Link from "next/link";
import styles from "./../page.module.css";

export default function Users({ id }) {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users Page</h1>
        <ol>
          <li>
            <Link href="/users/1">User 1: Alice</Link>
          </li>
          <li>
            <Link href="/users/2">User 2: Bob</Link>
          </li>
          <li>
            <Link href="/users/3">User 3: Charlie</Link>
          </li>
          <li>
            <Link href="/users/4">User 4: Diana</Link>
          </li>
          <li>
            <Link href="/users/5">User 5: Ethan</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}

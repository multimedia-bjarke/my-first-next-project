import Link from "next/link";
import styles from "./../page.module.css";

export default function Posts() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts Page</h1>
        <p>Here's a list of posts</p>
        <section>
          <ol>
            <li>
              <Link href="/posts/1">Post 1</Link>
            </li>
            <li>
              <Link href="/posts/2">Post 2</Link>
            </li>
            <li>
              <Link href="/posts/3">Post 3</Link>
            </li>
            <li>
              <Link href="/posts/4">Post 4</Link>
            </li>
            <li>
              <Link href="/posts/5">Post 5</Link>
            </li>
          </ol>
        </section>
      </main>
    </div>
  );
}

import styles from "./../page.module.css";

export default function Posts() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts Page</h1>
        <section>
          <ol>
            <li>Post 1</li>
            <li>Post 2</li>
            <li>Post 3</li>
            <li>Post 4</li>
            <li>Post 5</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

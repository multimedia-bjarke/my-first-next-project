import styles from "./../page.module.css";

export default function Users() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Users Page</h1>
        <ol>
          <li>User 1: Alice</li>
          <li>User 2: Bob</li>
          <li>User 3: Charlie</li>
          <li>User 4: Diana</li>
          <li>User 5: Ethan</li>
        </ol>
      </main>
    </div>
  );
}

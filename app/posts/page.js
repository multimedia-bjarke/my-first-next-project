import Link from "next/link";
import styles from "./../page.module.css";

export default async function Posts() {
  const response = await fetch(
    `https://fb-rest-race-default-rtdb.firebaseio.com/posts.json`
  );
  const dataObject = await response.json();
  console.log(dataObject);

  const posts = Object.keys(dataObject).map((key) => ({
    id: key,
    ...dataObject[key],
  }));
  console.log(posts);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Posts Page</h1>
        <p>Here's a list of posts</p>
        <section>
          <ol>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <Link href={"/posts/${post.id}"}>{post.caption}</Link>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </div>
  );
}

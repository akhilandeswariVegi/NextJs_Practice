import React from "react";
import Link from "next/link";

export default function UserPosts({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ padding: "5px" }}>
            <Link href={`/posts/userposts/${post.id}`} className="username">
              {post.title}
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps(params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: { posts: data },
  };
}

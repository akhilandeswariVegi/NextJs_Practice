import React from "react";
import Link from "next/link";

export default function Posts({ posts }) {
  return (
    <>
      {posts.map((post) => {
        return (
          <div key={post.id} style={{ padding: "5px" }}>
            <Link href={`/isrposts/${post.id}`} className="username">
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
  const res = await fetch("http://localhost:5000/posts");
  const data = await res.json();
  return {
    props: { posts: data },
  };
}

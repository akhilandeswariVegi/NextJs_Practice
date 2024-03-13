import React from "react";

export default function Post({ post }) {
  return <div>Hello ID- {post.title}</div>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await res.json();
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { postId: post.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

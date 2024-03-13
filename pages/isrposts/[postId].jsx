import React from "react";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  return <div>Hello ID- {post.title}</div>;
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/posts/${params.postId}`);
  const data = await res.json();
  return {
    props: { post: data },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:5000/posts");
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { postId: post.id.toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

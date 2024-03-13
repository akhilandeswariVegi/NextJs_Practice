import Link from "next/link";
import React from "react";

function Posts() {
  return (
    <div style={{ padding: "10px" }} className="view">
      <Link
        style={{ background: "blue", padding: "10px", color: "white" }}
        href="/posts/firstpost"
        replace
      >
        FirstPostPage
      </Link>
    </div>
  );
}

export default Posts;

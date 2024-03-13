import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function User() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="view username">
      <div>Hello ID- {username}</div>
      <Link
        href={"/users"}
        style={{
          background: "blue",
          padding: "10px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Home
      </Link>
    </div>
  );
}

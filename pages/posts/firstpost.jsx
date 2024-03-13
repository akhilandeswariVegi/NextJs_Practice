import { useRouter } from "next/router";
import React from "react";

function FirstPost() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/posts");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>FirstPost</div>
      <button
        style={{
          background: "blue",
          padding: "10px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={clickHandler}
      >
        GoBack
      </button>
    </div>
  );
}

export default FirstPost;

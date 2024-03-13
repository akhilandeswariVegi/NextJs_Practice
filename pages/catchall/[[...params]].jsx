import React from "react";
import { useRouter } from "next/router";

export default function CatchAll() {
  const router = useRouter();
  const { params = [] } = router.query;

  console.log(params.length);

  return (
    <>
      {params.length ? (
        <div>
          {params.map((param, index) => (
            <div key={index}>{param}</div>
          ))}
        </div>
      ) : (
        <h2>No params</h2>
      )}
    </>
  );
}

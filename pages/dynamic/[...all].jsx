import { useRouter } from "next/router";
import React from "react";

export default function DynamicAll() {
  const router = useRouter();
  const { all = [] } = router.query;

  return (
    <div className="view">
      <h2>{all.length ? "Params are there" : "No params"}</h2>
      <ul>
        {all.map((param, index) => (
          <li key={index}>{param}</li>
        ))}
      </ul>
    </div>
  );
}

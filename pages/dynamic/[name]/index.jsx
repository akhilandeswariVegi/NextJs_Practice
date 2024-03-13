import { useRouter } from "next/router";
import React from "react";

export default function DynamicName() {
  const router = useRouter();
  const { name } = router.query;
  return <div>Hello ID- {name}</div>;
}

import { useRouter } from "next/router";
import React from "react";

export default function DynamicId() {
  const router = useRouter();
  const { id, name } = router.query;
  return (
    <div>
      Hello ID- {id}-{name}
    </div>
  );
}

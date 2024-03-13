import React, { use } from "react";
import UsersData from "../../services/users.json";
import Link from "next/link";

export default function Users() {
  return (
    <div className="view">
      {UsersData.map((user) => {
        return (
          <Link href={`/users/${user.name}`} key={user.id} className="username">
            {user.name}
          </Link>
        );
      })}
    </div>
  );
}

import React from "react";

const winner = ({ data, username }) => {
  return (
    <div className="view">
      <h2>Welcome: {username}</h2>
      <div>
        winner is: {data.results[0]?.name.first} {data.results[0]?.name.last}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req, res } = context;
  let username = req.cookies.username || "Guest";
  res.setHeader("Set-Cookie", ["username = Accenture"]);
  const resp = await fetch("https://randomuser.me/api");
  const data = await resp.json();

  return { props: { data, username } };
}

export default winner;

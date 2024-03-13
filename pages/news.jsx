import { useRouter } from "next/router";
import React, { useState } from "react";

export default function UserPosts({ news }) {
  const [newsList, setNewsList] = useState(news);
  const router = useRouter();

  const clickHandler = async () => {
    const res = await fetch(`http://localhost:5000/news/?category=sports`);
    const data = await res.json();
    setNewsList(data);
    router.push("news/?category=sports", null, { shallow: true });
  };
  return (
    <>
      <button onClick={clickHandler}>sports</button>
      {newsList.map((item) => {
        return (
          <div key={item.id} style={{ padding: "5px" }}>
            {item.title} | {item.category}
            <hr />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const qs = category ? "category=sports" : "";
  const res = await fetch(`http://localhost:5000/news/?${qs}`);
  const data = await res.json();
  return {
    props: { news: data },
  };
}

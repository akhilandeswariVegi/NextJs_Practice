import useSWR from "swr";

const Books = () => {
  const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
  };

  const { data: books, error } = useSWR("http://localhost:5000/books", fetcher);

  if (error) return <div>failed to load</div>;
  if (!books) return <div>loading...</div>;

  return (
    <>
      <div>
        {books?.map((book, index) => {
          return (
            <div key={index}>
              {book.id}-{book.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Books;

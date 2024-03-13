import React, { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBooks = async () => {
    const books = await fetch("http://localhost:5000/books");
    setBooks(await books.json());
    setLoading(false);
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <>
      {loading ? (
        <h2>Loading..</h2>
      ) : (
        <div>
          {books?.map((book, index) => {
            return (
              <div key={index}>
                {book.id}-{book.title}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Books;

import { useState } from "react";
import { Books } from "../modules/Books";

export const ObjectsList = () => {
  const [books, setBooks] = useState<Books[]>([
    new Books("Grow mindset by Carol Dweck", 11, 1),

    new Books("Nonviolent communication by Marshall Rosenberg", 10, 2),
    new Books("Inspired by Marty Cagan", 15, 3),
  ]);

  //   lägg till i listan
  const addBook = () => {
    setBooks([
      ...books,
      new Books("Say Yes to Life by Viktor Frankl", 10, books.length + 1),
    ]);
  };

  // console.log(books);

  // Ta bort ur listan
  const removeBook = (id: number) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  // ändra i listan
  const changeVote = (id: number) => {
    setBooks(
      books.map((b) => {
        if (b.id === id) {
          return { ...b, votes: b.votes + 1 };
        }
        return b;
      })
    );
  };
  console.log(books);

  return (
    <>
      <ul>
        <button onClick={addBook}>Add a book</button>
        {books.map((b) => (
          <li key={b.id}>
            {b.name} , {b.votes} votes
            <button
              onClick={() => {
                changeVote(b.id);
              }}
            >
              Vote
            </button>
            <button
              onClick={() => {
                removeBook(b.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

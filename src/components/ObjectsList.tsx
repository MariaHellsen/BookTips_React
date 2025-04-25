export const ObjectsList = () => {
  const books = [
    { id: 1, name: "Grow mindset by Carol Dweck", votes: 11 },
    {
      id: 2,
      name: "Nonviolent communication by Marshall Rosenberg",
      votes: 10,
    },
    { id: 3, name: "Inspired by Marty Cagan", votes: 15 },
  ];
  return (
    <>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.name} , {b.votes} votes
          </li>
        ))}
      </ul>
    </>
  );
};

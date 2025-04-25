export const Introduction = () => {
  const title = "Books that has changed our lives";
  console.log(title);
  const oneBook = { name: "Grow mindset by Carol Dweck", votes: 10 };

  return (
    <>
      <h2>{title}</h2>
      <p>
        Some books don't just tell stories; they redefine us.
        <br />
        What's a book that changed your life?
        <br />
        Contribute your impactful read or find your next great discovery here.
      </p>
      <p>{oneBook.name}</p>
      <p>{oneBook.votes}</p>
    </>
  );
};

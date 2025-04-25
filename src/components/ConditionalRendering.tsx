export const ConditionalRendering = () => {
  const oneBook = { name: "Grow mindset by Carol Dweck", votes: 8 };
  const loading = false;

  return (
    <>
      {loading && <div>Loading data...</div>}
      <div>
        {oneBook.votes > 10 ? <p>Topp 10</p> : <p>Highly recommended</p>}
      </div>
    </>
  );
};

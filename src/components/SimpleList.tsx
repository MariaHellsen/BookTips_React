export const SimpleList = () => {
  const recommendationTypes: string[] = [
    "Topp 10",
    "Top Pick",
    "News",
    "Explore",
  ];
  console.log(recommendationTypes);
  return (
    <>
      {recommendationTypes.map((b, i) => (
        <button key={i}>{b}</button>
      ))}
    </>
  );
};

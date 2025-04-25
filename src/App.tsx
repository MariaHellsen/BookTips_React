import "./App.css";
import { Introduction } from "./components/books";
import { ConditionalRendering } from "./components/ConditionalRendering";
import { ObjectsList } from "./components/ObjectsList";
import { SimpleList } from "./components/SimpleList";

function App() {
  return (
    <>
      <Introduction />
      <ConditionalRendering />
      <SimpleList />
      <ObjectsList />
    </>
  );
}

export default App;

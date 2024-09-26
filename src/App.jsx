import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./views/Counter";
import ListProduct from "./views/ListProduct";
import Upload from "./views/Upload";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter /> */}
      {/* <ListProduct /> */}
      <Upload />
    </>
  );
}

export default App;

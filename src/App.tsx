import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RoutedBody } from "./components/RoutedBody";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RoutedBody />
    </>
  );
}

export default App;

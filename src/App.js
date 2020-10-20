import React from "react";
import Lorem from "./Lorem";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState([]);
  return (
    <div className="text-center">
      <h1 className="mt-8 uppercase text-2xl md:text-4xl">
        Tired of boring lorem ipsum?
      </h1>
      <Lorem count={count} text={text} setCount={setCount} setText={setText} />
    </div>
  );
}

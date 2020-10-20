import React from "react";
import data from "./data";

export default function Lorem({ count, text, setCount, setText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    //umwandeln in zahl
    let amount = parseInt(count);
    let randomNumber = Math.floor(Math.random() * data.length);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = randomNumber;
    }
    setText(data.slice(0, amount));
  };
  return (
    <div>
      <form className="mb:mt-8 mt-4" onSubmit={handleSubmit}>
        <label htmlFor="amount" name="amount" id="amount">
          Paragraphs:
        </label>
        <input
          id="amount"
          type="number"
          placeholder="0"
          className="w-12 ml-2 rounded px-2 py-1 font-serif font-bold"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="bg-green-700 px-2 py-1 ml-4 rounded text-green-100"
        >
          Generate
        </button>
      </form>
      <article className="md:w-2/3 w-11/12 mx-auto mt-8 leading-7">
        {text.map((item, index) => {
          return (
            <p className="my-8 text-base md:text-xl" key={index}>
              {item}
            </p>
          );
        })}
      </article>
    </div>
  );
}

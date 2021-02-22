import React, { useState } from "react";

const data = [
  "texttexttext",
  "texttexttext",
  "texttexttext",
  "texttexttext",
  "texttexttext"
];

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = e => {
    //prevemts reload
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <main>
      <form type="sumbit" onSubmit={submitHandler}>
        <input type="number" onChange={e => setCount(e.target.value)} />
        <button>Generate</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </main>
  );
};

export default App;

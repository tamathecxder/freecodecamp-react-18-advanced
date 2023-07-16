import { useState, useEffect } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("Hello, World!");
  };

  sayHello();

  useEffect(() => {
    console.log('hello from useEffect');
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;

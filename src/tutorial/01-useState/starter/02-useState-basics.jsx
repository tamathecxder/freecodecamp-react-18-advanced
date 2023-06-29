import { useState } from "react";

const UseStateBasics = () => {
  const [number, setNumber] = useState(0);
  
  const handleCounter = () => {
    return setNumber(number + 1);
  }
  
  return (
    <div>
      <h2>useState basics</h2>
      <p>Number: <span>{number}</span></p>
      <button onClick={handleCounter}>Click Me</button>
    </div>
  );
};

export default UseStateBasics;

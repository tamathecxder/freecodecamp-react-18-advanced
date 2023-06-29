const ErrorExample = () => {
  let counter = 0;

  const handleCounter = () => {
    counter = counter + 1;
    console.log(counter);
  }
  
  return (
    <div>
      <p>{counter}</p>
      <button style={{ padding: "10px 20px" }} onClick={handleCounter}>Click Me</button>
    </div>
  );
};

export default ErrorExample;

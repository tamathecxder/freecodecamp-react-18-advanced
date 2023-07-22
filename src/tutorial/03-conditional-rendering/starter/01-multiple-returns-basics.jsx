import { useEffect, useState } from 'react';

const MultipleReturnsBasics = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", placeItems: "center" }}>
      <h2>Multiple Returns Basics</h2>

      {
        isLoading ? <div className="loader"></div> : <p>Loading finished</p>
      }
    </div>
  );
};
export default MultipleReturnsBasics;

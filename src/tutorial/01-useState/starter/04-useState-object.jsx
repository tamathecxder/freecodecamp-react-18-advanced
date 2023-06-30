import { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Jason",
    age: 24,
    hobby: "Studying",
  });

  const displayPeople = () => {
    setPeople({ ...people, name: "Sarah" });
  };

  return (
    <div>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h3>Hobby: {people.hobby}</h3>
      <button className="btn" onClick={displayPeople}>
        Show John
      </button>
    </div>
  );
};

export default UseStateObject;

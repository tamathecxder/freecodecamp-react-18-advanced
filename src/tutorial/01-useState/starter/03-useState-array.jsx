import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [person, setPerson] = useState(data);

  const handleRemovePerson = (id) => {
    const newPerson = person.filter((p) => p.id !== id);
    setPerson(newPerson);
  };

  const handleClearPerson = () => {
    setPerson([]);
  }

  return (
    <section>
      <h1>useState Array Example</h1>
      <button type="button" onClick={handleClearPerson} style={{ marginBottom: "16px", background: "rgb(239 68 68)" }}>Clear</button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#fff",
          borderRadius: "12px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {person.map((value) => {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "20px",
              }}
              key={value.id}
            >
              <h2 style={{ color: "#000" }}>&#x2022; {value.name}</h2>
              <button
                onClick={() => handleRemovePerson(value.id)}
                style={{
                  height: "40px",
                  lineHeight: "20px",
                  fontSize: "0.85rem",
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UseStateArray;

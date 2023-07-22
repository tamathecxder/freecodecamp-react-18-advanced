import { useState } from "react";
import "../../../assets/css/tutorial.css";

const ToggleChallenge = () => {
  const [isExist, setIsExist] = useState(false);

  const toggle = () => {
    !isExist ? setIsExist(true) : setIsExist(false);

    console.log(isExist);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>toggle challenge</h2>
      <button className="btn" style={{ margin: "20px 0" }} onClick={toggle}>
        Show Cat
      </button>

      {isExist ? (
        <div className="fade-in">
          <img className="cat-image" width={400} src="https://w0.peakpx.com/wallpaper/128/400/HD-wallpaper-cut-cats-cut-beautiful-cats.jpg" alt="Cat Image" />
        </div>
      ) : (
        <div>...</div>
      )}
    </div>
  );
};

export default ToggleChallenge;

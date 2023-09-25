import { useEffect, useState } from "react";

const CleanupFunction = () => {
    const [toggle, setToggle] = useState(false);

    console.log("render");

    return (
        <div>
            <button
                type="button"
                className="btn"
                onClick={() => setToggle(!toggle)}
            >
                Toggle Component
            </button>
            {toggle && <RandomComponent />}
        </div>
    );
};

import React from "react";

const RandomComponent = () => {
    useEffect(() => {
        // console.log("this is interesting");
        // const intId = setInterval(() => {
        //     console.log("hello from interval");
        // }, 1000);
        // return () => {
        //     clearInterval(intId);
        // };
        const someFunc = () => {
            // logic here
        };

        window.addEventListener("scroll", someFunc);

        return () => window.removeEventListener("scroll", someFunc);
    }, []);

    return <h1>Hi, mom!</h1>;
};

export default CleanupFunction;

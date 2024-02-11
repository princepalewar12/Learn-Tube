import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [num, setNum] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);


  const prime = useMemo(() => findNthPrime(num),[num]);




  const handleClick = () => {
    // isDarkTheme ? setIsDarkTheme(false) : setIsDarkTheme(true)
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={
        "m-4 p-2 h-96 w-96 border-2 " +
        (isDarkTheme && "bg-gray-700 text-yellow-300")
      }
    >
      <div>
        <input
          className="border-2 border-black  text-black w-72 p-2 "
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl ">nth Prime: {prime}</h1>
      </div>
      <button
        className="p-2 m-10 bg-green-300 border-2 border-pink-500 "
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
};

export default Demo;

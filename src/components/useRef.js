import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  //   console.log(ref);
  /**not like => ref = 0;
   * ref = {current: 0}
   *
   */

  console.log("Rendering.....");
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Hello World", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div>
      <div className="m-4 p-2 bg-slate-50 border-2 border-black w-96 h-96 ">
        <button
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
          className="rounded-lg border border-white bg-blue-700 text-white p-3 text-xl m-3"
        >
          Increase X
        </button>
        <span className="font-bold text-xl m-3">let = {x}</span>
        <button
          onClick={() => {
            setY(y + 1);
            console.log(y);
          }}
          className="rounded-lg border border-white bg-blue-700 text-white p-3 text-xl m-3"
        >
          Increase X
        </button>
        <span className="font-bold text-xl m-3">State = {y}</span>
        <button
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=", ref.current);
          }}
          className="rounded-lg border border-white bg-blue-700 text-white p-3 text-xl m-3"
        >
          Increase X
        </button>
        <span className="font-bold text-xl m-3">useRef = {ref.current}</span>
        <button
          className="bg-red-900 p-2 m-4 text-white font-bold rounded-lg"
          onClick={() => clearInterval(i.current)}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default Demo2;

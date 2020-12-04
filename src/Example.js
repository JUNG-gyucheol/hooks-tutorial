import React, { useRef } from "react";

function Example() {
  const id = useRef(1);
  const setId = (n) => {
    id.current = n;
  };
  const printId = () => {
    console.log(id.current);
  };
  return <div></div>;
}

export default Example;

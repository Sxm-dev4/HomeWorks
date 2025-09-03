import React, { useState, useCallback } from "react";
import Son from "./Son";

const Father = () => {
  const list = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

 
  const increment = useCallback((num) => {
    setValor(num);
  }, []);

  return (
    <div>
      <h3>Father</h3>
      <p>Total: {valor}</p>
      <hr />

      {list.map((n, idx) => (
        <Son key={idx} numero={n} increment={increment} />
      ))}
    </div>
  );
};

export default Father;

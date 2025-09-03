import React from "react";

// React.memo evita renders innecesarios si las props no cambian
const Son = React.memo(({ numero, increment }) => {
  console.log("again reloaded..."); // para ver cuándo se vuelve a renderizar

  return (
    <button
      className="btn btn-primary m-3"
      onClick={() => increment(numero)}
    >
      {numero}
    </button>
  );
});

export default Son;

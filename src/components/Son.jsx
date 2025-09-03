import React from "react";


const Son = React.memo(({ numero, increment }) => {
  console.log("again reloaded..."); 

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

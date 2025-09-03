import { useState } from "react"

const FirstApps = ({value}) => {

  const [counter, setCounter] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleSubstract = () => {
    setCounter(counter - 1)
  }
  const handlereset = () => {
    setCounter(value)
  } 


  return (
    <div>
      <h1>Counter</h1>
      <span>{ counter }</span> 
      <button onClick={() => handleAdd()}>+1</button>
      <button onClick={() => handleSubstract()}>-1</button>
      <button onClick={() => handlereset()}>Reset</button>
    </div>
   
  );
}

export default FirstApps;
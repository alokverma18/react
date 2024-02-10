import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const addValue = function(){
    setCount(count+1);
  }

  const removeValue = function(){
    if (count>0)
      setCount(count-1);
  }

  return (
    <>
      <h1>Chai ☕aur Alok 🫶</h1>
      <h3>Counter Value : {count}</h3>

      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

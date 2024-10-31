import { useState } from "react"

const Setcount = () => {

    const [count, setCount] = useState(0)

  const addValue = ()=> {
    count >= 20 ? setCount(20):setCount(count+1)
  }

  const removeValue = ()=> {
    count <= 0 ? setCount(0):setCount(count-1)
  }

  return (
    <div>
      < h1>Counter Value {count}</h1>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
    </div>
  )
}

export default Setcount

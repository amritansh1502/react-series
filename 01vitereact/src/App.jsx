import { useState } from 'react'

function App() {
  // let count = 5
  let [count,setCount] = useState(5)
   const addValue = () => {
    if(count<=19){
    count = count+1 }
    setCount(count)
  
    console.log(count)}
    const subtractValue = () => {
      if(count>=1){
      count = count-1}
     setCount(count)
    }
 

  return (
  <> 
  <h1>Amrit Counter {count}</h1>
  <h2>Counter : {count}</h2>
  <button onClick={addValue}>Add value {count}</button>
  <button onClick={subtractValue}>Subtract value {count}</button>
   </>
  )
}

export default App

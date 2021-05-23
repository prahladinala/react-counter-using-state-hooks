import React, { useState } from "react"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)
  // const [count, setCount] = useState(true)
  // const [count, setCount] = useState(false)
  // const [count, setCount] = useState("name")
  // const [count, setCount] = useState("superman")
  // const [count, setCount] = useState({
  //   name: "",
  //   email: "gmail.com"
  // })

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <h1>Counter app using state</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button>Reset Counter</button>
      <button >Increment Counter</button>
      <button>Decrement Counter</button>
    </div>
  )
}
export default App;
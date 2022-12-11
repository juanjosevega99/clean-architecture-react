import { useState } from 'react'
import './App.css'
import { Home } from "./pages";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>{JSON.stringify(user)}</span>
      <Home />
    </div>
  )
}

export default App

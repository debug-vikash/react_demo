import { useState } from 'react'
import './App.css'
import Students from './pages/students'
import useCounter from './hooks/useCounter'

function App() {
  const [toggle, setToggle] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { current: count, increment, decrement, reset } = useCounter(0)

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? <h1>Show Text</h1> : <h1>Hide Text</h1>}
      </button>

      {toggle && <h1>Hello, Students!</h1>}
      {toggle || isLoggedIn ? <Students /> : <h2>Please log in.</h2>}

      <section id="center">
        <div>
          <h1>Increase Count</h1>
        </div>

        <button
          onClick={increment}>
          Count
        </button>

        <h1>{count}</h1>
        <h1>Decrease Count</h1>

        
        <button
          onClick={decrement}>
          Count
        </button>

        <h1>{count}</h1>

        <div>
          <h1>Reset Count</h1>
        </div>
        <button
          onClick={reset}>
          Count
        </button>

        <h1>{count}</h1>
      </section>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Students from './pages/students'

function App() {
  const [toggle, setToggle] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [count, setCount] = useState(0)
  // const [name, setName] = useState('')
  // const [submit, setSubmit] = useState(false)

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? <h1>Show Text</h1> : <h1>Hide Text</h1>}
      </button>

      {toggle && <h1>Hello, Students!</h1>}
      {toggle || isLoggedIn ? <Students /> : <h2>Please log in.</h2>}

      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((current) => current + 1)}>
          Count
        </button>

        <h1>{count}</h1>
      </section>

      {/* <section id="form">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSubmit(true)
          }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>

          {submit && <h1>Hello, {name}!</h1>}
        </form>
      </section> */}
    </>
  )
}

export default App

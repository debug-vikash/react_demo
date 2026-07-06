import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'



function App() {
 
   const [Toggle, setToggle] = useState(true)
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   return (
   <>
    <button onClick={() => setToggle(!Toggle)}>
      {Toggle ? <h1>Show Text</h1> : <h1>Hide Text</h1>}
    </button>
    {Toggle && <h1>Hello, React!</h1>}
    {Toggle || isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}

  </>
  )

 const [count, setCount] = useState(0)
  const [greet, setGreet] = useState('Hello, React!')
  const [name, setName] = useState('')
  const [submit, setSubmit] = useState(false)
  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}>
          Count
        </button>
            <>
            <h1>{count}</h1>
            </>

          <>
          <input
            type="text"
            value={greet}
            onChange={(e) => setGreet(e.target.value)}
          />
          <h1>{greet}</h1>
          </>
        
      </section>

      <section id="form">
        <form>
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


      </section>

    {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}

       
    </>
    
  )

useEffect(() => {
    async function getUsers() {
        console.log("Before fetch");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();

        console.log(data);

        console.log("After data");
    }

    getUsers();
}, []);


const std_name = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
return (<>
    {std_name.map((name,idx) => {
      return <h1 key={idx}>{name}</h1>;
})}
</>



)
}



export default App

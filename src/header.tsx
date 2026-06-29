import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <h1>My App</h1>
      <nav>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? 'Close' : 'Open'} Menu
        </button>
        {isMenuOpen && (
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  )
}
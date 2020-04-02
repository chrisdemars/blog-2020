import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="container header">
      <h1>ChrisDeMars</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blog">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Events</Link>
          </li>
          <li>
            <Link to="/blog">Resume</Link>
          </li>
          <li>
            <Link to="/blog">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

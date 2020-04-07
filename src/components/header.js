import React from "react"
import { Link } from "gatsby"

import "../global/styles.scss"
import HeaderStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <h1>ChrisDeMars</h1>
      <nav>
        <ul className={HeaderStyles.navItems}>
          <li className={HeaderStyles.navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={HeaderStyles.navItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={HeaderStyles.navItem}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={HeaderStyles.navItem}>
            <Link to="/blog">Portfolio</Link>
          </li>
          <li className={HeaderStyles.navItem}>
            <Link to="/blog">Events</Link>
          </li>
          <li className={HeaderStyles.navItem}>
            <Link to="/blog">Resume</Link>
          </li>
          <li className={HeaderStyles.navItem}>
            <Link to="/blog">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

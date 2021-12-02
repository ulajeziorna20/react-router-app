import React from "react"
import { Outlet, Link } from "react-router-dom"

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <h3>Have you been to these subpages?</h3>
      <nav className="second-home-navigation">
        <ul>
          <li>
            {" "}
            <Link to="/users-list" className="link-main-list">
              UsersList
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/second-home" className="link-main-list">
              Second Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/counter" className="link-main-list">
              Counter
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="main-navigation">
        <Link to="/" className="link-main-list">
          {" "}
          ... Back to Home Page
        </Link>
      </nav>
    </>
  )
}

export default About

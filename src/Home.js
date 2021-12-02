import React from "react"
import { Outlet, Link } from "react-router-dom"

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the Second Home!</h2>
        <p>
          I was a trial homepage! Now I am one of the children of the App Route!
        </p>
      </main>
      <nav></nav>
      <br />
      <nav className="main-navigation">
        <Link to="/" className="link-main-list">
          {" "}
          ... Back to Home Page
        </Link>
      </nav>
    </>
  )
}

export default Home

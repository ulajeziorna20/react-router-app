import React from "react";
import { Outlet, Link } from "react-router-dom"


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        {/* <Link to="/">Home</Link> */}
      </nav>
      <nav className="main-navigation">
        <Link to="/" className="link-main-list"> ... Back to Home Page</Link>
      </nav>
    </>
  );
}

export default About;
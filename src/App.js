import * as React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App

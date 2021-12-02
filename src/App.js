import * as React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Counter from "./components/counter/Counter"
import UsersList from "./components/userList/UsersList"
import HomePage from "./components/home-page/HomePage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="users-list" element={<UsersList />} />
          <Route path="counter" element={<Counter />} />
          <Route path="about" element={<About />} />
          <Route path="second-home" element={<Home />} />
        </Routes>
      </header>
    </div>
  )
}

export default App

import * as React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
import Counter from "./components/counter/Counter"
import UsersList from "./components/userList/UsersList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="users-list" element={<UsersList />} />
        </Routes>
      </header>
    </div>
  )
}

export default App

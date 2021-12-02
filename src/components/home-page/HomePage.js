import React from "react"
import "./css/HomePage.css"
import { Outlet, Link } from "react-router-dom"
// import { Routes, Route } from "react-router-dom"

function HomePage() {
  return (
    <>
      You are on the Home Page! Where would you go?
      <nav>
        <Link to="/users-list">Users List</Link>
        <Link to="/second-home">Second Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default HomePage

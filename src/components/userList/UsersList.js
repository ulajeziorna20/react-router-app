import React, { useState } from "react"
import "./css/UsersList.css"
import ListToDisplay from "./ListToDisplay"
import { Link } from "react-router-dom"

const UsersList = () => {
  const [name, setName] = useState("")
  const [userList, setUserList] = useState([])

  const enterNewUser = (e) => {
    setName(e.target.value)
  }

  const userListChange = () => {
    setUserList((userList) => [...userList, { name: name, key: Date.now() }])
    setName("")
  }

  const deleteUser = (id) => {
    let filteredUsers = userList.filter((user) => {
      if (user.key !== id) {
        return true
      }
      return false
    })

    setUserList(filteredUsers)
  }

  return (
    <section id="main-container">
      <h1 id="main-header">User's List</h1>
      <div>
        <span id="input-text">
          <input
            type="text"
            name="name"
            id="enter-name"
            placeholder="Enter name"
            onChange={enterNewUser}
            value={name}
          />
        </span>
        <button id="add-user-btn" onClick={userListChange}>
          Add User
        </button>

        <ListToDisplay userList={userList} deleteUserMth={deleteUser} />
      </div>
      <Link to="/">Back to Home Page</Link>
    </section>
  )
}

export default UsersList

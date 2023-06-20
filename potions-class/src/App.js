import './App.css'
import React, { useState, useEffect } from 'react'
import { hogwartsStudentRegistry } from './data.js'

function App(props) {
  const [students, setStudents] = useState(hogwartsStudentRegistry)
  const [name, setName] = useState('')
  const [house, setHouse] = useState('')
  function handleName(e) {
    setName(e.target.value)
  }
  function handleHouse(e) {
    setHouse(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    setStudents(
      students.unshift({
        name: name,
        house: house,
        time: new Date().toUTCString()
      })
    )
  }
  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container">
          <div className="form-wrapper">
            <div className="attendance-form">
              <form>
                <label>
                  Full name
                  <input
                    className="form-item form-field"
                    onChange={handleName}
                  ></input>
                </label>
                <label>
                  House
                  <input
                    className="form-item form-field"
                    onChange={handleHouse}
                  ></input>
                </label>
                <button className="form-item submit-btn" onClick={handleSubmit}>
                  Register!
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="app-rhs-container">
          <div className="register-wrapper">
            <div className="register-list">
              {hogwartsStudentRegistry.map((student) => {
                return (
                  <div>
                    <h4>
                      {student.name} - {student.house}
                    </h4>
                    <h5>{student.time}</h5>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

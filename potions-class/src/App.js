import './App.css'
import React, { useState, useEffect } from 'react'
import { hogwartsStudentRegistry } from './data.js'
import Register from './Register.js'
import StudentForm from './StudentForm.js'

function App(props) {
  const [students, setStudents] = useState(hogwartsStudentRegistry)
  function updateStudents(newList) {
    setStudents(newList)
  }
  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container">
          <div className="form-wrapper">
            <StudentForm
              updateStudents={(student) => {
                updateStudents([student, ...students])
              }}
            />
          </div>
        </div>
        <div className="app-rhs-container">
          <Register students={students} />
        </div>
      </div>
    </div>
  )
}

export default App

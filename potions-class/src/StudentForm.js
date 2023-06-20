import React, { useState } from 'react'

function StudentForm(props) {
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
    const newStudent = {
      name: name,
      house: house,
      time: new Date().toUTCString()
    }

    props.updateStudents(newStudent)
  }

  return (
    <div className="attendance-form">
      <form>
        <label>
          Full name
          <input className="form-item form-field" onChange={handleName}></input>
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
  )
}

export default StudentForm

import React from 'react'
import Student from './Student.js'

function Register(props) {
  return (
    <div className="register-list">
      {props.students.map((student) => {
        return (
          <div className="student-card">
            <Student student={student} />
          </div>
        )
      })}
    </div>
  )
}
export default Register

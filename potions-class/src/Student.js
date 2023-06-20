import React from 'react'

function Student(props) {
  return (
    <div>
      <h4>
        {props.student.name} - {props.student.house}
      </h4>
      <h5>{props.student.time}</h5>
    </div>
  )
}

export default Student

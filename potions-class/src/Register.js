function Register(props) {
  return (
    <div className="register-wrapper">
      <div className="register-list">
        {props.students.map((student) => {
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
  )
}
export default Register

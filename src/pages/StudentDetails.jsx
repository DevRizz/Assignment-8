import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

const StudentDetails = () => {
  const { id } = useParams()
  const student = useSelector((state) => 
    state.students.list.find(s => s.id === parseInt(id))
  )

  if (!student) {
    return <div>Student not found</div>
  }

  return (
    <div className="student-details">
      <h1 className="mb-4">Student Details</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{student.name}</h5>
          <p className="card-text"><strong>Email:</strong> {student.email}</p>
          <p className="card-text"><strong>Age:</strong> {student.age}</p>
          <p className="card-text"><strong>Class:</strong> {student.class}</p>
          <p className="card-text"><strong>Address:</strong> {student.address}</p>
          <p className="card-text"><strong>Phone:</strong> {student.phone}</p>
          <Link to={`/student/${student.id}/edit`} className="btn btn-primary me-2">Edit</Link>
          <Link to="/students" className="btn btn-secondary">Back to List</Link>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
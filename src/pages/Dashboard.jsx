import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const students = useSelector((state) => state.students.list)

  const totalStudents = students.length
  const classDistribution = students.reduce((acc, student) => {
    acc[student.class] = (acc[student.class] || 0) + 1
    return acc
  }, {})

  return (
    <div className="dashboard">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Total Students</h5>
              <p className="card-text display-4">{totalStudents}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Class Distribution</h5>
              <ul className="list-group">
                {Object.entries(classDistribution).map(([className, count]) => (
                  <li key={className} className="list-group-item d-flex justify-content-between align-items-center">
                    {className}
                    <span className="badge bg-primary rounded-pill">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Link to="/students" className="btn btn-primary me-2">View All Students</Link>
          <Link to="/register" className="btn btn-success">Register New Student</Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
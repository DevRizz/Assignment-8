import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import StudentList from './pages/StudentList'
import StudentRegistration from './pages/StudentRegistration'
import StudentDetails from './pages/StudentDetails'
import StudentEdit from './pages/StudentEdit'

const App = () => {
  return (
    <Router>
      <div className="app">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Student Portal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/students">Students</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/register" element={<StudentRegistration />} />
            <Route path="/student/:id" element={<StudentDetails />} />
            <Route path="/student/:id/edit" element={<StudentEdit />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../redux/slices/studentsSlice'

const StudentRegistration = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newStudent = {
      id: Date.now(), // This is a simple way to generate a unique ID. In a real app, you'd use a more robust method.
      ...formData,
      age: parseInt(formData.age)
    }
    dispatch(addStudent(newStudent))
    navigate('/students')
  }

  return (
    <div className="student-registration">
      <h1 className="mb-4">Student Registration</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="class" className="form-label">Class</label>
          <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Register Student</button>
      </form>
    </div>
  )
}

export default StudentRegistration
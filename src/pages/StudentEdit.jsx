import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateStudent } from '../redux/slices/studentsSlice'

const StudentEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const student = useSelector((state) => state.students.list.find(s => s.id === parseInt(id)))
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    class: '',
    address: '',
    phone: ''
  })

  useEffect(() => {
    if (student) {
      setFormData(student)
    }
  }, [student])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateStudent({ ...formData, id: parseInt(id) }))
    navigate('/students')
  }

  if (!student) {
    return <div>Student not found</div>
  }

  return (
    <div className="student-edit">
      <h1 className="mb-4">Edit Student</h1>
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
        <button type="submit" className="btn btn-primary">Update Student</button>
      </form>
    </div>
  )
}

export default StudentEdit
import { createSlice } from '@reduxjs/toolkit'
import studentsData from '../../data/students.json'

const initialState = {
  list: studentsData,
}

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.list.push(action.payload)
    },
    updateStudent: (state, action) => {
      const index = state.list.findIndex(student => student.id === action.payload.id)
      if (index !== -1) {
        state.list[index] = action.payload
      }
    },
    deleteStudent: (state, action) => {
      state.list = state.list.filter(student => student.id !== action.payload)
    },
  },
})

export const { addStudent, updateStudent, deleteStudent } = studentsSlice.actions

export default studentsSlice.reducer
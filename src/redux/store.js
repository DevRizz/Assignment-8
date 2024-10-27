import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from './slices/studentsSlice'

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
})
import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './slides/roomSlides'

export const store = configureStore({
  reducer: {
    Room : roomReducer
  },
})
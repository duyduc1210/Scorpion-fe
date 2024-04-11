import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roomId: null,
  typeRoom: '',
  view: '',
  tienIch: [],
  soNguoi: '',
  dienTich: '',
  giaTien: '',
  moTa: '',
  tenPhong: [],
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setRoomData } = roomSlice.actions;

export const selectRoom = (state) => state.room;

export default roomSlice.reducer;
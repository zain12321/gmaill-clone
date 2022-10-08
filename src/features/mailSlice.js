import {  createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

// const initialState = {
//   value: 0,
//   status: 'idle',
// };

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    openSendMessageIsOpen: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessageIsOpen: (state) => {
      state.sendMessageIsOpen = false;
    },
   
  },
  });

export const { openSendMessageIsOpen, closeSendMessageIsOpen } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;

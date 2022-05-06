import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  deviceWidth: window.innerWidth > 768,
}

const isDesktop = (state) => {
    state.deviceWidth = window.innerWidth > 768;
}
export const counterSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // witchDevice: (state) => {
    //     isDesktop(state)
    //     window.addEventListener('resize', isDesktop(state));
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { witchDevice } = counterSlice.actions

export default counterSlice.reducer
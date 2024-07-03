import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
    value: number,
    name: string,
    address: object
}

const initialState: CounterState = {
    value: 10,
    name: "pildo",
    address: { name: 'ha noi', code: 100000 }
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 10
        },
        decrement: (state) => {
            state.value -= 10
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
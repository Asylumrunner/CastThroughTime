import { createSlice } from '@reduxjs/toolkit'

const currentSetSlice = createSlice({
    name: "currentSet",
    initialState: {
        lastPlayedSet: "mom"
    },
    reducers: {
        changeLastPlayedSet(state, action) {
            state.lastPlayedSet = action.payload;
        }
    }
});

export const { changeLastPlayedSet } = currentSetSlice.actions;
export const currentSetReducer = currentSetSlice.reducer;
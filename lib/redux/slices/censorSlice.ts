import { Censor, Staff } from '@/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Censor = {
    id: 0,
    name: '',
    email: '',
    department: '',
    digitalSignature: '',
    fullName: '',
    level: 0,
}

const censorSlice = createSlice({
    name: 'censor',
    initialState,
    reducers: {
        setCensor(state, action: PayloadAction<Censor>) {
            return action.payload
        },
        clearCensor(state) {
            return initialState
        },
    },
})

export const { setCensor, clearCensor } = censorSlice.actions
export default censorSlice.reducer
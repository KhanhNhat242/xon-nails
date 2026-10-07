import { Staff } from '@/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Staff = {
    id: 0,
    name: '',
    email: '',
    department: '',
    digitalSignature: '',
    fullName: '',
}

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        setStaff(state, action: PayloadAction<Staff>) {
            return action.payload
        },
        clearStaff(state) {
            return initialState
        },
    },
})

export const { setStaff, clearStaff } = staffSlice.actions
export default staffSlice.reducer
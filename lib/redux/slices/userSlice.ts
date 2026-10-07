// store/slices/userSlice.ts
import { Account } from '@/type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { persistor } from '..'

const initialState: Account = {
    id: 0,
    username: '',
    password: '',
    role: '',
    staff_id: 0,
    censor_id: 0,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<Account>) {
            return action.payload
        },
        logout: () => {
            return initialState
        },
    },
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer
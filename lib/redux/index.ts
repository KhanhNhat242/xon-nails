// redux/index.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import userSlice from './slices/userSlice'
import staffSlice from './slices/staffSlice'
import censorSlice from './slices/censorSlice'
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'staff', 'censor'], // chỉ persist slice user, thêm slice khác nếu cần
}

const rootReducer = combineReducers({
    user: userSlice,
    staff: staffSlice,
    censor: censorSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    // Bắt buộc thêm để tránh warning từ redux-persist
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
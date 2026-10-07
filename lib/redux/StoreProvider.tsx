// store/StoreProvider.tsx
'use client'

import { Provider } from 'react-redux'
import { store } from './index'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './index'

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])

  // if (!isClient) return <Provider store={store}>{children}</Provider>

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}
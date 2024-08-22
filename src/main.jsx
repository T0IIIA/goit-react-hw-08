import './styles.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'modern-normalize'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'





ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

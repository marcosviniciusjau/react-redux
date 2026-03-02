import './styles/globals.css'
import {Provider as ReduxProvider} from 'react-redux'
import './App.css'
import { store } from './store'
import { Player } from './pages/Player'

export function App() {

  return (
    <ReduxProvider store={store}>
      <Player/>
    </ReduxProvider>
  )
}


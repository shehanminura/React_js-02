import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './componenets/Registration'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="contaner">
        <div className="row">
          <Registration></Registration>
        </div>
      </div>
    </div>
  )
}

export default App

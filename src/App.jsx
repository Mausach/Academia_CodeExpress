import { useState } from 'react'
import { AppRouter } from './rutas/rutas'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppRouter/>
        
        {/* <Footer/> */}
    </>
  )
}

export default App

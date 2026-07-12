import { useCallback, useState } from 'react'
import BubbleBackground from './components/BubbleBackground/BubbleBackground'
import Cursor from './components/Cursor/Cursor'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import './styles/global.css'

export default function App() {
  const [ready, setReady] = useState(false)
  const handleDone = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready ? <Loader onDone={handleDone} /> : null}
      <BubbleBackground />
      <Cursor />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

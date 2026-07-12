import { useCallback, useState } from 'react'
import BubbleBackground from './components/BubbleBackground/BubbleBackground'
import Cursor from './components/Cursor/Cursor'
import FloatingActions from './components/FloatingActions/FloatingActions'
import Footer from './components/Footer/Footer'
import FullScreenLoader from './components/FullScreenLoader/FullScreenLoader'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import TypographyControls from './components/TypographyControls/TypographyControls'

import './styles/global.css'

export default function App() {
  const [ready, setReady] = useState(false)
  const handleDone = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready ? <FullScreenLoader onDone={handleDone} /> : null}
      <BubbleBackground />
      <Cursor />
      <Navbar />
      <TypographyControls />
      <FloatingActions />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

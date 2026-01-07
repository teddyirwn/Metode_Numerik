import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className=" min-h-screen
      font-sans
      bg-linear-to-br from-slate-950
      via-slate-900
      to-slate-950
      text-white"
    >
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App


import './assets/css/main.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

import { useState } from 'react'

function App() {

  const [option, setOption] = useState('home')

  return (
    <>
      <Header setOption={setOption} />
      <Content option={option} />
      <Footer />
    </>
  )
}

export default App

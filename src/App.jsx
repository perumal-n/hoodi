import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from "./leftcard";
import Shop from "./rightcard";

function App() {
  const [txt, setTxt] = useState({})

  return (
    <>
       <div className='container'>
    <Product setproduct={setTxt}/>
    <Shop setcard={txt}/>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleChange = (e) =>{
    const color = document.getElementById("color").value
    console.log(e,color)
    document.body.style.backgroundColor = color
  }

  return (
    <div >
      <div className="card">
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <label htmlFor="color"><h3>Change the color</h3></label>
        <input type="color" onChange={handleChange} name="clr" id='color' />
          {/* count is {count} */}
        </div>
      </div>
    </div>
  )
}

export default App
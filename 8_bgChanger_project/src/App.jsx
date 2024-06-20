
/* It is the responsibility of react to update UI means to change background color
Our ownly task is to update state variable only

*/

import { useState } from 'react'
import './App.css'

function App() {


  let initialValue='white'
  const[color,setColor]=useState(initialValue)

const changeColor = (obj)=>
  {
    setColor(obj.target.id)

  }



  return (
     <div className="h-screen w-100 duration-1000 space-x-4 px-2 " style={{backgroundColor:color}} >
      <button id='black' onClick={changeColor} className='bg-black w-20 h-20 border-white rounded-xl text-white'>Black</button>
      <button id='yellow' onClick={changeColor}  className='bg-yellow-400  border-white  w-20 h-20 rounded-xl text-white'>Yellow</button>
      <button id='blue' onClick={changeColor}  className='bg-blue-400 w-20  border-white  h-20 rounded-xl text-white'>Blue</button>
      <button id='red' onClick={changeColor}  className='bg-red-400 w-20 h-20  border-white  rounded-xl text-white'>Red</button>
      <button id='green' onClick={changeColor}  className='bg-green-400 w-20 h-20  border-white  rounded-xl text-white'>Green</button>

</div>
  )
}

export default App

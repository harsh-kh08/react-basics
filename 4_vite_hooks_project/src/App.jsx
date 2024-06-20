/*

function App() {

let value=0

const addCounter = ()=>
{
value++;
console.log(value)
}

const decreaseCounter=()=>
  {
    value--;
    console.log(value)
  }
  return (
    <>
    <h1>Hooks Tutorials</h1>
    <h2>Counter value: {value}</h2>
    <button onClick={addCounter}>Add value</button>
    <br />
    <button onClick={decreaseCounter}>Remove Value</button>
    </>
  )
}

export default App

---------- CODE ENDS -------------------------

- We have not imported react module but we are able to write html in js. This is happening because
babel is injecting react in this file as we named the file with '.jsx' extension.

- In the above code , when we click addValue button, value gets increased but UI does not gets updated
UI updation don't happens.

- React controls when and where UI updation should happen, all thses things decided by React only.

- In react , we will handle all the updation or changes in value inside code using js but updation of UI will happen
through only react.

- So here, comes the story of hooks

# Hooks (Hooks in React are used to Update UI)

- Now to update UI, we have to use 'useState' hook imported from react module
(import { useState } from 'react')
- setState function will always control the state variable. Example: const[state,setState] = useState(initialValue)


*/




import { useState } from 'react'
import './App.css'


function App() {

  let initalValue=0
  let [state, setState] = useState(initalValue)





  return (
    <>
    <h1>Hooks Tutorials</h1>
    <h2>Counter value: {state}</h2>
    <button onClick={()=>
      {
        setState(state+1)
      }
    }>Add value</button>
    <br />
    <button onClick={()=>
      {
        setState(state-1)
      }}>Remove Value</button>
    </>
  )
}

export default App

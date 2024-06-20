/*

In order to add javascript code into html code, add {}.
Remeber we can passs evaluated expression of js inside these curly braces
We cannot pass statements inside the curly braces (For example - if-else statement)

*/




import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
const username = "javascript";
function MyApp()
{
  return <div><h1>Hello {username}</h1></div>
 
}
const ReactElement = {
  type:'a',
  props:{
      href:'www.google.com',
      target:'_blank'
  },
  children:'Visit Google'
}

//  We will create element using react library
const anotherElement =( <a href="www.google.com" target='_blank'>Google</a> )

// We wil know what is the defination of object used by react in render function :

const newElement = React.createElement('a',
  {
    href:'www.google.com',
    target:'_blank'
  },
  'click me to visit google'
)



ReactDOM.createRoot(document.getElementById('root')).render(



// Functional component in jsx which returns html elements will also gets converted or transpiled into js object which reacts understand.
// Instead of writing <MyApp /> , we can write  MyApp() as it is end of the day, a function only.
// MyApp()

// Can we write functional component in form js directly to save a cycle ?

// <ReactElement/>

// The above tag will not work because instead of using functional component, we are using js object
// So it will parse js object with this angle bracket tag which will give error
// So we have to write this function as calling the object directly (ReeactElement())

// ReactElement()- This will also not work because we are passing our own syntax object which is not
// accepted by the the render function of react



newElement // remeber not to pass object with the constructor







)

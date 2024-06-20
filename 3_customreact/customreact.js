/*

- create-react-app and vite uses bundler performs behind mechanism to convert HTML elemetns to javascript objects

- Functional component in jsx which returns html elements will also gets converted or transpiled into something which reacts understand.


- The functional component returns html code to ReactDom.render() function of react.
- React converts the code to js object and then it renders the component by taking values from the object inside the dom

*/



// Creating Own Custom React

function customRender(reactElement,mainContainer)
{
    const element = document.createElement(reactElement.type)
    for(const prop in reactElement.props)
        {
            element.setAttribute(prop,reactElement.props[prop])
        }
      const childNode =  document.createTextNode(reactElement.children)
      element.appendChild(childNode)
mainContainer.appendChild(element)
}



// We have taken the container 
const mainContainer =  document.querySelector('#id')

// We have defined component as a function in jsx. So now we will look how the components looks to react(in form of javascript) or
// we can say how the component looks when it gets converted into javascript
const reactElement = {
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank'
    },
    children:'Visit Google'
}


// Now we want method that will add this component to the root container
// or We want to inject this component inside the root

customRender(reactElement,mainContainer);


/*

Video 3

- Vite is a bundler tool.
- We will create react prject through vite
- Dev dependencies in package json never goes to the production
- Vite doesn't have node modules folder, so in order to install we will run - npm install 
- Scripts that we have to run can be seen from scripts section in package .json
- 
- We have to learn how react is injected into java because end of the day react is javascript
- Always remember web need react and react dom libraries to maipulate web DOM of pages
- React is our core foundational library and React DOM is an implementation of react on web and React Native library is an implementation of react on mobile
- Browser makes DOM of web page likewise React also makes its own DOM of web page which is known as virtual DOM
- HTML written in javascript is jsx

For create-my-react app
- In HTML, we do not specify the script src link so how the javascript is injected in html
So javascript is injected in HTML using react-scripts present in the package.json file.
- 'ReactDom.createRoot' is used to select element from the DOM and used to render elements inside that root element

For Vite app
- We are not provided with react scripts in package.json
- so we have to include script src in html file

Creating Components through vite -
- Whenever we make components file , we have to give it.jsx extension
- All the Tag name of javascript should have first letter as capital
- We use fragment(<> </>) to wrap adjacent JSX elements

Best Practices while creating components -

- Components name should be capitalized
- Components file name should be also capitalised
- Files which return html will have .jsx extension
- Files which only have javascript has .js extension

Overview of React -
- We have to inject script in html
- Script is run by two library - react and react dom
- Like browser makes a dom of web page, react also makes its parallel DOM known as VirtuaDOM (ReactDOM)
- React is called single page application because we have only one html page and only have one div which is known as root element

*/















import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



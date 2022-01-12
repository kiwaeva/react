// console.log(React) React is used to create elements/content
// console.log(ReactDOM) ReactDOM - is used to render it onto the DOM
// console.log(ReactNative) eill render it onto the mobile device
//JSX syntax extension to JavaScript used with React


const reactContentRoot = document.getElementById('root')

// Wrting react code with vanilla JS
//   React.createElement(name of the html element,{props},content of the list item)
// const myFirstElement = React.createElement(
//     'ul', //creating html element that is unordered list
//     null, 
//    [ React.createElement('li',null,'item1'), //inside ul passing an array of li items
//      React.createElement('li',null,'item2'), //inside ul passing an array of li items
// ])                  

//In order for browser to read JSX, it has to be passed through the Babel transcompiler


// Components are containers that have elements inside them. They are reusable and can be used in multiple places throughout the app
const App = () => {
    const myItem = "evelina"  //{can be reused}

    return (
    <ul>
        <li>item1</li>
        <li>item2 {myItem}</li>
        <li>{myItem}</li>
        <li>{myItem.toUpperCase()}</li> 
    </ul>
    )
}

ReactDOM.render(<App/>, reactContentRoot) //rendering by using ReactDOM
// component tag syntax is like html tag <App/> or App()

import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import './styles/global.css'

// const reactContentRoot = document.getElementById('root')
// ReactDOM.render(<App/>, reactContentRoot) //rendering by using ReactDOM
// component tag syntax is like html tag <App/> or App()

//shorter version of code above
ReactDOM.render(<App/>, document.getElementById("root"))
 
import React, {Component} from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "./index.css"


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

class Cat extends Component{
    render(){
        return <h1>Hello iam a cat!</h1>
    }
}

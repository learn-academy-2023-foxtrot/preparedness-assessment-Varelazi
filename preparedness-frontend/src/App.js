import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [name, setName] = useState('') //useState is used to manage and update a state. In this case, to manage and update whenever the input(name) is being changed. 
  const passName = (event) => {
    setName(event.target.value) //target.value accesses the value of an input element. 
  }

  const handleReset = () =>{
    setName('') // Makes setName blank
  }

  return (
    <body>
    <div className="entire-content">
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name" className="label">Enter your name</Label>
          <Input id="inputfield" onChange={passName} value={name}/>{/* onChange{passName} will cause the event to happen, whenever the name changes. */}
        </div>
        <div className="buttons">
          <ModalComponent name={name}/>{/* name={} is the prop being passed into the ModalComponent file, so in the other file it will be props.name. The {name} inside of the syntax is the value from input */}
          <Button id="reset" onClick={handleReset}>Reset</Button> {/* When you click the Reset, it will activate the handleReset function which sets the new name as blank */}
        </div>
      </div>
    </div>
    </body>
  )
}

export default App

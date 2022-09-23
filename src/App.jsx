import { Modal } from "./Components/Modal/Modal"
import { Router } from "./Routing/Router"
import React from "react"

function App() {
 //usamos hash navigation debemos usar /#/endPoint

 const [modal, setModal] = React.useState(false)
 const [blog, setBlog] = React.useState('')

  return (
    <div className="App">
      <Router 
      setModal={setModal}
      setBlog={setBlog}
      blog={blog}
      />
      {modal&& <Modal
      setModal={setModal}
     
      blog={blog}
      />}
     
    </div>
  )
}

export default App

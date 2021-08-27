import "./App.css"
import React, {useState} from "react"
import InputComponent from './components/InputComponent/InputComponent'
import OutputComponent from './components/OutputComponent/OutputComponent'



function App() {
  const [fetchResponse, setFetchResponse] = useState([])

  return (
    <div id="app">
    <InputComponent setFetchResponse={setFetchResponse}/>
    {fetchResponse.length > 0 && <OutputComponent fetchResponse={fetchResponse}/>}
    </div>
  )
}

export default App

import React, {useState} from 'react'
import '../Input/Input.css'

const Input = (props) => {
  
const [placeholderState, setPlaceholderState] = useState("Unesite željenu reč...")

const erasePlaceholderText = () => {
  setPlaceholderState("")
}

const resetPlaceholderText = () => {
  setPlaceholderState("Unesite željenu reč...")
}

const loadData = async (word) => {
  let api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  let url = api.concat(word)
  let data = await fetch(url)
  let data_obj = await data.json()
  return data_obj;
}

const getWord = (event) => {
  let word = document.getElementById('userInput').value;
  if(event.key === "Enter" && word.length > 0){
    loadData(word)//vraca niz
    .then(data => props.setFetchData(data))
  }
}


  return (
    <div>
      <input type="text" id="userInput" 
      placeholder={placeholderState} 
      onFocus={erasePlaceholderText} 
      onBlur={resetPlaceholderText}
      onKeyPress={getWord}/>
    </div>
    
  )
}

export default Input
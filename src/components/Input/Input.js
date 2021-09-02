import React, {useState} from 'react'
import '../Input/Input.css'


// Komponenta za unos reci
const Input = (props) => {
  
//state za placeholder tekst u okviru input polja
const [placeholderState, setPlaceholderState] = useState("Unesite željenu reč...")

//manipulacija placeholder tekstom u zavisnosti od dogadjaja
const erasePlaceholderText = () => {
  setPlaceholderState("")
}

const resetPlaceholderText = () => {
  setPlaceholderState("Unesite željenu reč...")
}

//asinhrono dobavljanje podataka od specificiranog APIja
const loadData = async (word) => {
  let api = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  let url = api.concat(word)
  //moglo je i let url = `'https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  let data = await fetch(url)
  let data_obj = await data.json()
  return data_obj;
}

/*dobavljanje inputa od korisnika pritiskom na dugme Enter i pozivanje funkcije za dobijanje 
podataka od APIja uz prosledjivanje korisnikovog inputa*/
const getWord = (event) => {
  let word = document.getElementById('userInput').value;
  if(event.key === "Enter" && word.length > 0){
    loadData(word)
    /*salje dobijene podatke u roditeljsku komponentu App preko funkcije za setovanje state-a App komponente(setFetchData)
    kako bi dalje mogli da se proslede siblinzima(deci app komponente)*/
    .then(data => props.setFetchData(data))
  }
}

//renderuje obicno input polje sa malo ukrasa
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
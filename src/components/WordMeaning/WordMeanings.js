import React, {useState} from 'react'
import DefinitionCard from '../DefinitionCard/DefinitionCard'
import './WordMeanings.css'
import WordMeaning from './WordMeaning'

//komponenta za ispis pojedinih znacenja neke reci
const WordMeanings = (props) => {
  //rec moze da ima vise znacenja stoga postavljam state za pracenje indeksa trenutnog znacenja u nizu znacenja
  const [meaningIndex, setMeaningIndex] = useState(0)

  let wordMeanings = props.meanings
/* Jedno znacenje moze imati vise definicija, prema ovom APIju, stoga sam znacenja mapirao u odvojene anchor tagove kao selektore
  i znacenja na koje se odnose prikazao u wordDefinitions div-u kroz DefinitionCard kartice
*/

/* metoda za promenu znacenja koja na klik promeni state meaningIndex, re-renderuje WordMeanings komponentu 
i doda selected tag na WordMeaning karticu zbog cisto estetskih efekata, da se vidi sta je izabrano*/
  const changeMeaning = (event, idx) => {
    console.log(event)
    event.preventDefault()
    setMeaningIndex(idx)
  }

  return (
    <div className="wordMeaning">
      <div className="meaningSelector">
        {/*mapiranje znacenja (glagol, imenica, itd) u WordMeaning komponentu koja je ujedno i selektor za prikaz odredjenih definicija */}
        {wordMeanings && wordMeanings.map((meaning, idx) => {
          return (
            <WordMeaning meaning={meaning.partOfSpeech.slice(0,1).toUpperCase().concat(meaning.partOfSpeech.slice(1))} index={idx} changeMeaning={changeMeaning} meaningIndex={meaningIndex} key={idx}/>
          )
        })}
      </div>
      {/* mapiranje definicija u odnosu na trenutno stanje meaningIndex i prosledjivanje u DefinitionCard komponentu*/}
      <div className="wordDefinitions">
        {wordMeanings[meaningIndex].definitions && wordMeanings[meaningIndex].definitions.map((e, idx) => <DefinitionCard definitionData={e} key={idx}/>)}
      </div>
    </div>
  )
}

export default WordMeanings
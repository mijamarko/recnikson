import React, {useState} from 'react'
import DefinitionCard from '../DefinitionCard/DefinitionCard'
import './WordMeaning.css'

const WordMeaning = (props) => {
  const [meaningIndex, setMeaningIndex] = useState(0)

  let wordMeanings = props.meanings

  const changeMeaning = (event) => {
    event.preventDefault()
    setMeaningIndex(event.target.getAttribute("index"))
  }

  return (
    <div className="wordMeaning">
      <div className="meaningSelector">
        {wordMeanings && wordMeanings.map((e, idx) => <a href="/#" index={idx} onClick={changeMeaning} key={e.partOfSpeech}>{e.partOfSpeech.slice(0, 1).toUpperCase()}{e.partOfSpeech.slice(1)}</a>)}
      </div>
      <div className="wordDefinitions">
        {wordMeanings[meaningIndex].definitions && wordMeanings[meaningIndex].definitions.map((e, idx) => <DefinitionCard definitionData={e} key={idx}/>)}
      </div>
    </div>
  )
}

export default WordMeaning
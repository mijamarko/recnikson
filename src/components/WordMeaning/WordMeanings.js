import React, {useState} from 'react'
import DefinitionCard from '../DefinitionCard/DefinitionCard'
import './WordMeanings.css'
import WordMeaning from './WordMeaning'

const WordMeanings = (props) => {
  const [meaningIndex, setMeaningIndex] = useState(0)

  let wordMeanings = props.meanings

  const changeMeaning = (event, idx) => {
    console.log(event)
    event.preventDefault()
    setMeaningIndex(idx)
  }

  return (
    <div className="wordMeaning">
      <div className="meaningSelector">
        {wordMeanings && wordMeanings.map((meaning, idx) => {
          return (
            <WordMeaning meaning={meaning.partOfSpeech.slice(0,1).toUpperCase().concat(meaning.partOfSpeech.slice(1))} index={idx} changeMeaning={changeMeaning} meaningIndex={meaningIndex} key={idx}/>
          )
        })}
      </div>
      <div className="wordDefinitions">
        {wordMeanings[meaningIndex].definitions && wordMeanings[meaningIndex].definitions.map((e, idx) => <DefinitionCard definitionData={e} key={idx}/>)}
      </div>
    </div>
  )
}

export default WordMeanings
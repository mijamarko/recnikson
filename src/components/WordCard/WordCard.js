import React from 'react'
import WordMeaning from '../WordMeaning/WordMeaning'
import './WordCard.css'

const WordCard = (props) => {
  let wordData = props.word
  let meanings = wordData.meanings

  return (
    <div className="wordCard">
      <p>{wordData.word} - <a rel="noreferrer" target="_blank" href={wordData.phonetics[0].audio} className="phonetic">/{wordData.phonetic}/</a></p>
      {/* Nisam iskoristio audio tag zato što izgleda kriminalno ružno i na hromu i mozili*/}
      <p>{wordData.origin.slice(0,1).toUpperCase()}{wordData.origin.slice(1)}</p>
      <WordMeaning meanings={meanings} />
    </div>
  )
}

export default WordCard
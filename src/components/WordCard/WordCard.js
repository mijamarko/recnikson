import React from 'react'
import WordMeanings from '../WordMeaning/WordMeanings'
import './WordCard.css'

//kao props od svoje roditeljske komponente dobija jedan rec objekat (jedan rec objekat zvuci kao bugarski xD) i sve sto se nalazi u njemu
const WordCard = (props) => {
  let wordData = props.word
  let meanings = wordData.meanings

  /*rec u sebi ima rec, fonetski ispis, i audio zapis izgovora, i to je (uglavnom) jedinstveno za svaku rec
  Rec moze sadrzati vise znacenja stoga sam ih odvojio i poslao u novu child komponentu WordMeanings
  */
  return (
    <div className="wordCard">
      <p>{wordData.word} - <a rel="noreferrer" target="_blank" href={wordData.phonetics[0].audio} className="phonetic">/{wordData.phonetic}/</a></p>
      {/* Nisam iskoristio audio tag zato što izgleda kriminalno ružno i na hromu i mozili*/}
      <p>{wordData.origin && wordData.origin.slice(0,1).toUpperCase().concat(wordData.origin.slice(1))}</p>
      {/*prosledjivanje znacenja WordMeanings komponenti*/}
      <WordMeanings meanings={meanings} />
    </div>
  )
}

export default WordCard
import React, {useState} from 'react'
import WordSwitcher from '../WordSwitcher/WordSwitcher'
import WordCard from '../WordCard/WordCard'
import './Output.css'

//Output komponenta kao props dobija fetchData od svoje roditeljske komponente App i prosledjuje te podatke svojoj deci za obradu i prikaz
const Output = (props) => {
  /*API poziv moze da vrati vise reci u nizu pa postavljam state za indeks trenutne reci u nizu koja se prikazuje
  Trenutni indeks kao i poslednji indeks se dalje prosledjuju WordSwitcher child komponenti koja sluzi za prolazenje kroz niz reci*/
  const [index, setIndex] = useState(0)

  //prost render dve wordswitcher komponente za prolazenje kroz reci i jedne komponente za ispis trenutne reci
  let data = props.fetchData
  return (
    <div className="outputContainer">
      <WordSwitcher currentIndex={index} lastIndex={data.length} setIndex={setIndex} direction={"previous"}/>
      <WordCard word={data[index]}/>
      <WordSwitcher currentIndex={index} lastIndex={data.length} setIndex={setIndex} direction={"next"}/>
    </div>
  )
}

export default Output
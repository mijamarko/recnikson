import React, {useState} from 'react'
import './WordComponent.css'
import MeaningComponent from '../MeaningComponent/MeaningComponent'

const WordComponent = (props) => {
  const [wordIndex, setWordIndex] = useState(0)

  let data = props.wordData;
  let wordMeanings = data.meanings;

  return (
    <div>
      <div id="wordComponent">
        <p>{data[wordIndex].word}</p>
        {data[wordIndex].phonetics.map((e) => {
          return (
          e.hasOwnProperty("audio")
          ?<p>{e.text}<audio controls src={"http:".concat(e.audio)}></audio></p>
          :<p>{e.text} - no pronounciation audio</p>
          )
        })}
      </div>
      {/* <MeaningComponent wordMeanings={wordMeanings}/> */}
    </div>
  )
}

export default WordComponent
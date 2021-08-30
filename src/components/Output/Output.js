import React, {useState} from 'react'
import WordSwitcher from '../WordSwitcher/WordSwitcher'
import WordCard from '../WordCard/WordCard'
import './Output.css'


const Output = (props) => {
  const [index, setIndex] = useState(0)

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
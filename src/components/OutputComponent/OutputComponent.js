import React from 'react'
import WordComponent from '../WordComponent/WordComponent';
import WordSwitcher from '../WordSwitcher/WordSwitcher';
import './OutputComponent.css'

const OutputComponent = (props) => {

  let data = props.fetchResponse;
  return (
    <div id="outputComponent">
      <WordSwitcher wordCount={data.length}/>
      <WordComponent wordData={data}/>
      <WordSwitcher wordCount={data.length}/>
    </div>
  )
}

export default OutputComponent
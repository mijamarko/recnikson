import React from 'react'
import './WordSwitcher.css'

const WordSwitcher = (props) => {

  let currentIndex = props.currentIndex
  let lastIndex = props.lastIndex
  let setIndex = props.setIndex
  let direction = props.direction === "previous" ? "<" : ">"

  const changeWord = () => {
    if(direction === "<"){
      if(currentIndex > 0){
        setIndex(currentIndex-1)
      }
    } else {
      if(currentIndex < lastIndex-1){
        setIndex(currentIndex+1)
      }
    }
  }

  return (
    <div className="wordSwitcher" onClick={changeWord}>
      {lastIndex !== 0 && direction}
    </div>
  )
}

export default WordSwitcher
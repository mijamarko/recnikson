import React from 'react'
import './WordMeanings.css'

const WordMeaning = (props) => {
  console.log(props.meaning)
  let classes = (props.index === props.meaningIndex) ? 'meaning selected' : 'meaning';
  return (
    <a href="/#" className={classes} onClick={(e) => props.changeMeaning(e, props.index)}>{props.meaning}</a>
  )
}

export default WordMeaning
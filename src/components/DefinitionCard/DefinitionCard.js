import React from 'react'
import './DefinitionCard.css'

const DefinitionCard = (props) => {

  let data = props.definitionData

  return (
    <div className="definitionCard">
      <span className="definitionCardItem">{data.definition.slice(0,1).toUpperCase()}{data.definition.slice(1)}<br/></span>
      
      {data.example 
      ?<span className="definitionCardItem">Example: {data.example.slice(0,1).toUpperCase()}{data.example.slice(1)}<br/></span>
      : ''}

      {data.synonyms.length > 0 
      ?<span className="definitionCardItem">Synonyms: {data.synonyms.map((e, idx, arr) => {
        if(idx === arr.length-1){
          return e
        }
        return e + ', '
      })}<br/></span>
      : ''}

      {data.antonyms.length > 0 
      ?<span className="definitionCardItem">Antonyms: {data.antonyms.map((e, idx, arr) => {
        if(idx === arr.length-1){
          return e
        }
        return e + ', '
      })}<br/></span>
      : ''}

    </div>
  )

}

export default DefinitionCard
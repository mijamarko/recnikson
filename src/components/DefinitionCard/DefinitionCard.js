import React from 'react'
import './DefinitionCard.css'

//Komponenta za output pojedinacnih definicija jednog znacenja jedne reci
const DefinitionCard = (props) => {
/*kroz prop prima definiciju reci, primer reci u recenici, sinonime i antonime ako ih ima */
  let data = props.definitionData

  return (
    <div className="definitionCard">
      <span className="definitionCardItem">{data.definition.slice(0,1).toUpperCase().concat(data.definition.slice(1))}<br/></span>
      
      { /*Ukoliko postoji primer ispisi ga*/}
      {data.example 
      ?<span className="definitionCardItem">Example: {data.example.slice(0,1).toUpperCase().concat(data.example.slice(1))}<br/></span>
      : ''}

      {/* Ukoliko postoje sinonimi ispisi ih i na sve osim poslednjeg dodaj ', ' zbog lepseg formatiranja */}
      {data.synonyms.length > 0 
      ?<span className="definitionCardItem">Synonyms: {data.synonyms.map((e, idx, arr) => {
        if(idx === arr.length-1){
          return e
        }
        return e + ', '
      })}<br/></span>
      : ''}

      {/* Ukoliko postoje antonimi ispisi ih i na sve osim poslednjeg dodaj ', ' zbog lepseg formatiranja */}
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
import React from 'react'
import './WordSwitcher.css'

const WordSwitcher = (props) => {

  /*Kao props dobija trenutni indeks niza reci, poslednji indeks niza reci, smer u kom treba da se krece (u ovom slucaju levo ili desno) kroz niz
  i metodu za postavljanje state-a indeksa reci u roditeljskoj Output komponenti */
  let currentIndex = props.currentIndex
  let lastIndex = props.lastIndex
  let setIndex = props.setIndex
  let direction = props.direction === "previous" ? "<" : ">"

  /*Ukoliko se trazi prethodna rec indeks se smanjuje za 1, i obratno za sledecu rec.
  Ukoliko prethodni ili sledeci indeksi postoje, poziva se setIndex metoda za postavljanje state-a u output komponenti
  sto dovodi do re-renderovanja Output komponente*/
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

  //komponenta se renderuje samo ukoliko postoji vise reci u nizu
  return (
    <div className="wordSwitcher" onClick={changeWord}>
      {lastIndex !== 0 && direction}
    </div>
  )
}

export default WordSwitcher
import React from 'react'
import './WordMeanings.css'

/* prikazuje karticu za selektovanje znacenja, preko propsa prima samo znacenje (glagol, imenica, itd.),
svoj indeks u nizu znacenja i trenutni indeks niza znacenja u state-u WordMeanings roditeljske komponente (meaningIndex) */
const WordMeaning = (props) => {
  /*ukoliko je indeks prop ove komponente isti kao i meaningIndex roditeljske komponente onda ova komponenta dobija klasu selected
  koja joj menja boju zbog lakseg raspoznavanja*/
  let classes = (props.index === props.meaningIndex) ? 'meaning selected' : 'meaning';
  return (
    /* vraca anchor tag sa gorenavedenim klasama i onClick eventom koji pali changeMeaning funkciju iz roditeljske komponente
    i renderuje definicije ovog znacenja */
    <a href="/#" className={classes} onClick={(e) => props.changeMeaning(e, props.index)}>{props.meaning}</a>
  )
}

export default WordMeaning
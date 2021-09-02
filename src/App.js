import "./App.css"
import React, { useState } from "react"
import Output from "./components/Output/Output"
import Input from "./components/Input/Input"

export default function App() {
  //podesavanje state-a, apdejtuje se iz child komponente Input
  const [fetchData, setFetchData] = useState([])


  //renderuje Input komponentu i Output komponentu ukoliko postoje neki podaci u fetchData promenljivoj
  return (
    <div id="app">
      <Input setFetchData={setFetchData}/>
      {fetchData.length > 0 && <Output fetchData={fetchData} />}
    </div>
  )

  // export default App

  //Ovo ispod je bilo za testiranje i odbija da se folduje, ostavljam ga jer mozda ustreba

  /*const [fetchData, setFetchData] = useState([
    {
      word: "set",
      phonetic: "sɛt",
      phonetics: [
        {
          text: "sɛt",
          audio:
            "//ssl.gstatic.com/dictionary/static/sounds/20200429/set--_gb_1.mp3",
        },
      ],
      origin:
        "Old English settan, of Germanic origin; related to Dutch zetten, German setzen, also to sit.",
      meanings: [
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition:
                "put, lay, or stand (something) in a specified place or position.",
              example: "Delaney set the mug of tea down",
              synonyms: [
                "put",
                "place",
                "put down",
                "lay",
                "lay down",
                "deposit",
                "position",
                "settle",
                "station",
                "leave",
                "stow",
                "prop",
                "lean",
                "stand",
                "plant",
                "pose",
                "dispose",
                "stick",
                "dump",
                "bung",
                "park",
                "plonk",
                "plump",
                "pop",
                "plunk",
                "posit",
              ],
              antonyms: [],
            },
            {
              definition: "put or bring into a specified state.",
              example: "the Home Secretary set in motion a review of the law",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "adjust (a clock or watch), typically to show the right time.",
              example:
                "set your watch immediately to local time at your destination",
              synonyms: [
                "adjust",
                "regulate",
                "synchronize",
                "coordinate",
                "harmonize",
                "calibrate",
                "put right",
                "correct",
                "collimate",
              ],
              antonyms: [],
            },
            {
              definition: "harden into a solid or semi-solid state.",
              example:
                "cook for a further thirty-five minutes until the filling has set",
              synonyms: [
                "solidify",
                "harden",
                "become solid",
                "become hard",
                "stiffen",
                "thicken",
                "gel",
                "cake",
                "congeal",
                "coagulate",
                "clot",
                "freeze",
                "crystallize",
                "gelatinize",
              ],
              antonyms: ["melt"],
            },
            {
              definition:
                "(of the sun, moon, or another celestial body) appear to move towards and below the earth's horizon as the earth rotates.",
              example: "the sun was setting and a warm red glow filled the sky",
              synonyms: [
                "go down",
                "sink",
                "decline",
                "descend",
                "drop",
                "subside",
                "dip below the horizon",
                "vanish",
                "disappear",
              ],
              antonyms: ["rise"],
            },
            {
              definition:
                "(of a tide or current) take or have a specified direction or course.",
              example:
                "a fair tide can be carried well past Land's End before the stream sets to the north",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "start (a fire).",
              example:
                "the school had been broken into and the fire had been set",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "(of blossom or a tree) form into or produce (fruit).",
              example:
                "wait until first flowers have set fruit before planting out the peppers",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "sit.",
              example:
                "the rest of them people just set there goggle-eyed for a minute",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
    {
      word: "set",
      phonetic: "sɛt",
      phonetics: [
        {
          text: "sɛt",
          audio:
            "//ssl.gstatic.com/dictionary/static/sounds/20200429/set--_gb_1.mp3",
        },
      ],
      origin:
        "late Middle English: partly from Old French sette, from Latin secta ‘sect’, partly from set1.",
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition:
                "a group or collection of things that belong together or resemble one another or are usually found together.",
              example: "a set of false teeth",
              synonyms: [
                "group",
                "collection",
                "series",
                "complete series",
                "assortment",
                "selection",
                "compendium",
                "batch",
                "number",
                "combination",
                "grouping",
                "assemblage",
                "arrangement",
                "array",
              ],
              antonyms: [],
            },
            {
              definition:
                "the way in which something is set, disposed, or positioned.",
              example: "the shape and set of the eyes",
              synonyms: [
                "expression",
                "look",
                "determined expression",
                "fixed look",
              ],
              antonyms: [],
            },
            {
              definition: "a radio or television receiver.",
              example: "a TV set",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "a collection of scenery, stage furniture, and other articles used for a particular scene in a play or film.",
              synonyms: [
                "stage furniture",
                "stage set",
                "stage setting",
                "setting",
                "scenery",
                "backdrop",
                "wings",
                "flats",
                "mise en scène",
              ],
              antonyms: [],
            },
            {
              definition:
                "an arrangement of the hair when damp so that it dries in the required style.",
              example: "a shampoo and set",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "a cutting, young plant, or bulb used in the propagation of new plants.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "the last coat of plaster on a wall.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition:
                "the amount of spacing in type controlling the distance between letters.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "variant spelling of sett.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "another term for plant (sense 4 of the noun).",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
        {
          partOfSpeech: "verb",
          definitions: [
            {
              definition:
                "group (pupils or students) in sets according to ability.",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
    {
      word: "set",
      phonetic: "sɛt",
      phonetics: [
        {
          text: "sɛt",
          audio:
            "//ssl.gstatic.com/dictionary/static/sounds/20200429/set--_gb_1.mp3",
        },
      ],
      origin: "late Old English, past participle of set1.",
      meanings: [
        {
          partOfSpeech: "adjective",
          definitions: [
            {
              definition: "fixed or arranged in advance.",
              example: "try to feed the puppy at set times each day",
              synonyms: [
                "fixed",
                "established",
                "hard and fast",
                "determined",
                "predetermined",
                "arranged",
                "prearranged",
                "prescribed",
                "scheduled",
                "specified",
                "defined",
                "appointed",
                "decided",
                "agreed",
                "unvarying",
                "unchanging",
                "invariable",
                "unvaried",
                "unchanged",
                "rigid",
                "inflexible",
                "cast-iron",
                "strict",
                "settled",
                "predictable",
                "routine",
                "standard",
                "customary",
                "regular",
                "normal",
                "usual",
                "habitual",
                "accustomed",
                "wonted",
                "conventional",
              ],
              antonyms: ["changing", "variable", "unpredictable"],
            },
            {
              definition: "ready, prepared, or likely to do something.",
              example: "the first family was set for a quiet night of rest",
              synonyms: [
                "ready",
                "prepared",
                "organized",
                "equipped",
                "primed",
                "fit",
                "geared up",
                "psyched up",
                "up for it",
              ],
              antonyms: ["unprepared"],
            },
          ],
        },
      ],
    },
    {
      word: "sett",
      phonetic: "sɛt",
      phonetics: [
        {
          text: "sɛt",
          audio:
            "//ssl.gstatic.com/dictionary/static/sounds/20200429/sett--_gb_1.mp3",
        },
      ],
      origin:
        "Middle English: variant of set2, the spelling with -tt prevailing in technical senses.",
      meanings: [
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "the den or burrow of a badger.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "a granite paving block.",
              synonyms: [],
              antonyms: [],
            },
            {
              definition: "the particular pattern of stripes in a tartan.",
              synonyms: [],
              antonyms: [],
            },
          ],
        },
      ],
    },
  ])*/

  
}



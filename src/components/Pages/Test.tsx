import React from 'react'
import NextBeforeIcon from '../Atom/Button/NextBeforeIcon'
import ShuffleIcon from '../Atom/Button/ShuffleIcon'
import WordCard from '../Atom/WordCard'
import MainButton from '../Molecule/MainButton'

const Test = () => {
  return (
    <div>
      <MainButton />
      <ShuffleIcon />
      <WordCard />
      <NextBeforeIcon />
    </div>
  )
}

export default Test
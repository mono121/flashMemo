import styled from '@emotion/styled'
import React, { FC, useState } from 'react'

import SyncAltIcon from '@mui/icons-material/SyncAlt';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import WordCard from '../Atom/WordCard'
import MainButton from '../Molecule/MainButton'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AnserButton from '../Atom/Button/AnserButton'

const Test = () => {

  const [cardId, setCardId] = useState(0);
  const [answer, setAnswer] = useState(false)
  const [swap, setSwap] = useState(false)
  const [userInfo, setUserInfo] = useState(user)

  const nextCard = () => {
    if(cardId===user.length-1){
    }else{
      setAnswer(false)
      setCardId(cardId+1)
    }
  }

  const beforeCard = () => {
    if(cardId===0){
    }else{
      setAnswer(false)
      setCardId(cardId-1)
    }
  }

  const swapCard = () => {setSwap(!swap)}

  const showAnser = () => {setAnswer(true)}

  const shuffle = () => {
    const cloneUser = userInfo

    for (let i = cloneUser.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1))
      // 配列の要素の順番を入れ替える
      let tmpStorage = cloneUser[i]
      cloneUser[i] = cloneUser[rand]
      cloneUser[rand] = tmpStorage
    }

    setUserInfo(cloneUser)
  }

  return (
    <div>
      <MainButton />
      <StyledIcon>
    	  <ShuffleIcon onClick={shuffle} fontSize='large' sx={{ marginRight: '100px'}} />
    	  <SyncAltIcon onClick={swapCard} fontSize='large' />
      </StyledIcon>
      <WordCard>
        {
        swap 
          ? answer ? user[cardId].word : user[cardId].meaning
          : answer ? user[cardId].meaning : user[cardId].word
        }
      </WordCard>
      <BeforeNextAnswer>
        <StyledIcon>
          <NavigateBeforeIcon onClick={beforeCard} sx={{ fontSize: 60 }} />
          <NavigateNextIcon onClick={nextCard} sx={{ fontSize: 60, marginRight: '50px' }} />
        </StyledIcon>
        <AnserButton onClick={showAnser} />
      </BeforeNextAnswer>
    </div>
  )
}

export default Test

const StyledIcon = styled('div')({
  textAlign: 'center',
  margin: '20px',
})

const BeforeNextAnswer = styled(`div`)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const user = [
  {
      id: 1,
      word: 'run',
      meaning: '走る'
  },
  {
      id: 2,
      word: 'time',
      meaning: '時間'
  },
  {
      id: 3,
      word: 'sleep',
      meaning: '眠る'
  },
]
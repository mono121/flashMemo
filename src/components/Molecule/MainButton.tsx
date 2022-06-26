import React from 'react'
import styled from '@emotion/styled'
import BaseButton from '../Atom/Button/BaseButton'
import { useNavigate } from 'react-router-dom'

const MainButton = () => {

  const navigate = useNavigate()

  const toList = () => {navigate('/List')}
  const toCreate = () => {navigate('/Create')}
  const toTest = () => {navigate('/Test')}

  return (
    <>
      <SButton size="large" onClick={toList}>リスト</SButton>
      <SButton size="large" onClick={toCreate}>作成</SButton>
      <SButton size="large" onClick={toTest}>テスト</SButton>
    </>
  )
}

export default MainButton


const SButton = styled(BaseButton)({
  color: 'black',
})
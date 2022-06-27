import React, { FC } from 'react'
import styled from '@emotion/styled'
import BaseButton from '../Atom/Button/BaseButton'
import { useNavigate } from 'react-router-dom'
import  { css }  from  '@emotion/react'

const MainButton: FC = () => {

  const navigate = useNavigate()

  const toList = () => {navigate('/List')}
  const toCreate = () => {navigate('/Create')}
  const toTest = () => {navigate('/Test')}

  return (
    <>
      <SButton className={"a"} size="large" onClick={toList}>リスト</SButton>
      <SButton className={"a"} size="large" onClick={toCreate}>作成</SButton>
      <SButton className={"a"} size="large" onClick={toTest}>テスト</SButton>
    </>
  )
}

export default MainButton
const SButton = styled(BaseButton)({
  color: 'black',
  fontSize: '2em',
})
import React, { FC } from 'react'
import styled from '@emotion/styled'
import BaseButton from '../Atom/Button/BaseButton'
import { useNavigate } from 'react-router-dom'

const MainButton: FC = () => {

  const navigate = useNavigate()

  const toList = () => {navigate('/List')}
  const toCreate = () => {navigate('/Create')}
  const toTest = () => {navigate('/Test')}

  return (
    <Menu>
      <SButton className={"list"} size="large" onClick={toList}>リスト</SButton>
      <SButton className={"create"} size="large" onClick={toCreate}>作成</SButton>
      <SButton className={"test"} size="large" onClick={toTest}>テスト</SButton>
    </Menu>
  )
}

export default MainButton

const SButton = styled(BaseButton)({
  color: 'black',
})

const Menu = styled('div')({
  textAlign: 'center',
})
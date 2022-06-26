import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import styled from '@emotion/styled'

const StyledButton = styled(Button)({
  margin: '15px',
  fontSize: '1.6em',
})

const Home = () => {

  const navigate = useNavigate()

  const toList = () => {navigate('/List')}
  const toCreate = () => {navigate('/Create')}
  const toTest = () => {navigate('/Test')}

  return (
    <>
      <h1>Home page</h1>
      <StyledButton variant="outlined" size="large" onClick={toList}>リスト</StyledButton>
      <StyledButton variant="outlined" size="large" onClick={toCreate}>作成</StyledButton>
      <StyledButton variant="outlined" size="large" onClick={toTest}>テスト</StyledButton>
    </>
  )
}

export default Home
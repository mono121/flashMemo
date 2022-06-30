import React from 'react'
import { Card, Grid } from '@mui/material'
import styled from '@emotion/styled'

const WordCard = () => {
  return (
    <Grid container direction="column" alignItems="center" sx={{ marginTop: '30px' }}>
      <Grid item>
        <Card sx={{ textAlign: 'center', width: 400, height: 200 }} elevation={3}>aaa</Card>
      </Grid>
    </Grid>
  )
}

export default WordCard
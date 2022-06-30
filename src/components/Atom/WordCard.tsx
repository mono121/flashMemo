import React from 'react'
import { Card, Grid } from '@mui/material'
import styled from '@emotion/styled'

const WordCard = () => {
  return (
    <Grid container 
      direction="column" 
      alignItems="center" 
      sx={{ marginTop: '30px' }}>
      <Grid item>
        <Card 
          sx={{ width: 400, 
          height: 200,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' }} 
          elevation={3}>
            <h2>befoer</h2>
          </Card>
      </Grid>
    </Grid>
  )
}

export default WordCard
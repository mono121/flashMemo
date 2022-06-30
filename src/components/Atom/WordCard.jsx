import { Card, Grid } from '@mui/material'
import React from 'react'

const WordCard = () => {
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Card sx={{ textAlign: 'center', width: 300, height: 200 }}>aaa</Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default WordCard

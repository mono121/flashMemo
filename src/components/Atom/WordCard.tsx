import React, { FC } from 'react'
import { Card, Grid } from '@mui/material'

type Props = {
  children: string;
}

const WordCard: FC<Props> = (props) => {
  const {children} = props

  return (
    <Grid container 
      direction="column" 
      alignItems="center" 
      sx={{ marginTop: '30px' }}>
      <Grid item>
        <Card 
          sx={{ width: 500, 
          height: 250,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center' }} 
          elevation={3}>
            <h2>{children}</h2>
          </Card>
      </Grid>
    </Grid>
  )
}

export default WordCard
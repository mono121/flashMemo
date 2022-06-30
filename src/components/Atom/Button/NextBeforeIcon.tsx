import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import styled from '@emotion/styled';

const NextBeforeIcon = () => {
  return (
    <StyledIcon>
      <NavigateBeforeIcon sx={{ fontSize: 60 }} />
      <NavigateNextIcon sx={{ fontSize: 60 }} />
    </StyledIcon>
  )
}

export default NextBeforeIcon

const StyledIcon = styled('div')({
  textAlign: 'center',
  margin: '20px',
})
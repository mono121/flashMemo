import React from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import styled from '@emotion/styled';

const ShuffleButton = () => {
  return (
    <StyledIcon>
    	<ShuffleIcon fontSize='large' sx={{ marginRight: '100px'}} />
    	<SyncAltIcon fontSize='large' />
    </StyledIcon>
  )
}

export default ShuffleButton

const StyledIcon = styled('div')({
  textAlign: 'center',
	marginTop: '20px',
})
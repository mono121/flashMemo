import React from 'react'
import SyncIcon from '@mui/icons-material/Sync';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import styled from '@emotion/styled';

const ShuffleIcon = () => {
  return (
    <StyledIcon>
    	<SyncIcon fontSize='large' sx={{ marginRight: '100px'}} />
    	<SyncAltIcon fontSize='large' />
    </StyledIcon>
  )
}

export default ShuffleIcon

const StyledIcon = styled('div')({
  textAlign: 'center',
	marginTop: '20px',
})
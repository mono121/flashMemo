import React from 'react'
import { Button } from '@mui/material'
import styled from '@emotion/styled'

type Props = {
    children: string;
    onClick: VoidFunction;
    size: "small" | "large" | "medium" | undefined;
}

const BaseButton: React.FC<Props> = (props) => {
  const { children, onClick, size } = props;

  return (
    <>
      <StyledButton 
        variant="outlined" 
        size={size} 
        onClick={onClick}>{children}
      </StyledButton>
    </>
  )
}

export default BaseButton

const StyledButton = styled(Button)({
    margin: '15px',
    fontSize: '1.6em',
  })

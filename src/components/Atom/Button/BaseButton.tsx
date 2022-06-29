import React, { FC } from 'react'
import { Button } from '@mui/material'
import styled from '@emotion/styled'

type Props = {
    children: string;
    onClick: VoidFunction;
    size: "small" | "large" | "medium" | undefined;
    className: string;
}

const BaseButton: FC<Props> = (props) => {
  const { children, onClick, size, className } = props;

  return (
    <>
      <StyledButton 
        className={className} 
        variant="outlined" 
        size={size} 
        onClick={onClick}>
          {children}
      </StyledButton>
      </>
  )
}

export default BaseButton

const StyledButton = styled(Button)({
    margin: '15px',
    fontSize: '1.6em',
  })
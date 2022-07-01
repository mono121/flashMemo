import React, { FC } from 'react'
import BaseButton from './BaseButton'

type Props = {
    onClick?: VoidFunction
}

const AnserButton: FC<Props> = (props) => {
	const { onClick } = props

  return (
    <BaseButton onClick={onClick} variant="contained">
        答え
    </BaseButton>
  )
}

export default AnserButton
import { color } from '@mui/system'
import React, { FC } from 'react'
import { UserFolder } from "../types/userFolder"

type Props = {
    user: UserFolder
}

const UserCardFolder: FC<Props> = (props) => {
  const { user } = props

  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メールアドレス</dt>
        <dd>{user.email}</dd>
        <dt>サイト</dt>
        <dd>{user.website}</dd>
      </dl>
    </div>
  )
}

export default UserCardFolder

const style = {
  background: "white",
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0 16px",
  margin: "8px",
}
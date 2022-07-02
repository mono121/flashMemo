import React, { useState } from 'react'
import { Button } from '@mui/material'

import MainButton from '../Molecule/MainButton'
import UserCardFolder from '../UserCardFolder'
import useAllUsers from '../hooks/useAllUsers'

const Home = () => {
  const { getUsers, users, loading, error } = useAllUsers()

  const onClickFetchUser = () => getUsers()

  return (
    <>
      <MainButton />
      <Button onClick={onClickFetchUser} variant="outlined" >データの取得</Button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {users.map((user) => (
            <UserCardFolder key={user.id} user={user} />
          ))}
        </>
      )}
    </>
  )
}

export default Home

// const user = {
//   id: 1,
//   name: "阿部　太郎",
//   flashCardName: "英単語",
//   content: "TOEICの勉強で分からなかった単語"
// }
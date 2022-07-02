import React, { useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { User } from '../../types/api/user'

import MainButton from '../Molecule/MainButton'
import UserCardFolder from '../UserCardFolder'
import { UserFolder } from '../../types/userFolder'

const Home = () => {
  const [users, setUsers] = useState<Array<UserFolder>>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const onClickFetchUser = () => {
    setLoading(true)
    setError(false)

    axios
    .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      const data = res.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        website: user.website,
      }))
      setUsers(data)
    })
    .catch(() => {
      setError(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }

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
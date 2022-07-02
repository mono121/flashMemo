import React, { useState } from 'react'
import axios from 'axios'

import { UserFolder } from '../../types/userFolder'
import { User } from '../../types/api/user'

const useAllUsers = () => {
	const [users, setUsers] = useState<Array<UserFolder>>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)

	const getUsers = () => {
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

	return { getUsers, users, loading, error }
}

export default useAllUsers
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { usersIndex } from './userService'

export default function useUsers(){
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(
    async () => {
        try{
          const users = await usersIndex()
          setUsers(users)
          setLoading(false)
        }catch(e){
          setError(e)
        }
    },[]
  )

  return {loading, error, data: users }

}
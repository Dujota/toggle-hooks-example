/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { usersIndex } from './userService'

export default function useUsers(){
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(
    // trigger this effect the component mounts
    async () => {
      // attempt to fetch list of users from API
      // when loaded, set the users object to local state of this hook and set loading to false
        try{
          const users = await usersIndex()
          setUsers(users)
          setLoading(false)
        }catch(e){
          // If the fetch fails (401, 404, 400, 500 etc...)
          // we should catch that error and return that instead
          setError(e)
        }
    },[]
  )

  // running this hook returns an object with 3 keys
  return {loading, error, users }

}
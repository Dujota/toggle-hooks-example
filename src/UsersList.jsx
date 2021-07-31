import React, { useState, useEffect } from 'react'
import { usersIndex } from './userService'

import useUsers from './useUsers'
import Card from './Card'
import Toggle from './Toggle'


// cdm --> use the fetch function
// when the fn returns data, we set that to state
// once state updates, we render the list on the page

export default function UsersList({setUsers, users,loading,  count, setCount}) {
  // const [loading, setLoading] = useState(true)
  // when comp mounts fetch data

// use effect 1 argument is CDM + CDU


  // useEffect(
  //   async () => {
  //     console.log("Component Did Mount")
  //     const users = await usersIndex()


  //     setUsers(users)
  //     setLoading(false)
  //   },[]
  // )

  // const {loading, error, data} = useUsers()

  useEffect(
    ()=>{
      if(users.length){
        console.log('USERS LOADED!!!!', users)
      }
    },
    [users]
  )

  if(loading){
    return <div>LOADING!!!!</div>
  }
  return (
    <>
      {users.map(
        user => <Card title={`Profile - ${user.name}`} butonText key={user.id}>
          <div className="conent-body">
            <p>User Name: {`${user.username}`}</p>
            <Toggle>
              <div className="details">
              <p>User email: {`${user.email}`}</p>
              <p>User website: {`${user.website}`}</p>
              <p>User phone: {`${user.phone}`}</p>
              </div>
            </Toggle>
          </div>
        </Card>
      )}
    </>
  )
}

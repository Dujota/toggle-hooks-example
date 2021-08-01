import React, { useEffect } from 'react'



import Card from './Card'
import Toggle from './Toggle'


// cdm --> use the fetch function
// when the fn returns data, we set that to state
// once state updates, we render the list on the page

export default function UsersList({ users, loading}) {

  // when comp mounts fetch data
  // This useEffect was moved into a custom hook, it still does the exact same thing
  // useEffect(
  //   async () => {
  //     console.log("Component Did Mount")
  //     const users = await usersIndex()


  //     setUsers(users)
  //     setLoading(false)
  //   },[]
  // )

  useEffect(
    ()=>{
      // This effect is triggered when the users prop updates
      // this is a component did update for only users changes
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

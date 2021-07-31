import React, { useState } from 'react';
import './App.css';

import Toggle from './Toggle'
import Card from './Card.jsx'
import UsersList from './UsersList';

import useUsers from './useUsers';


// keep track of a variable showContent : <Boolean>
// function that we can trigger which  will set true/false
// call that function when the button is clicked

// condtionially render some content based on the new state variable

/**
* updateShow  = () => this.setState({ key: value })  < setter
* const { key } = this.state
*/


function App() {
  const {data: users, loading, error} = useUsers()
  const [count, setCount] = useState(0);

  return (
  <div className="App">
    <Toggle>
      <UsersList users={users}
      loading={loading}
      //setUsers={setUsers}
      count={count} setCount={setCount}/>
    </Toggle>
  </div>
  );
}

export default App;

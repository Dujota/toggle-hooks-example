import React, {useState} from 'react'

export default function Toggle(props) {
  const [show, setShow] = useState(false);

  if(show){
    return <>
      { props.children }
      <button onClick={() => setShow(!show)}>Show/Hide</button>
    </>
  }

  return <button onClick={() => setShow(!show)}>Show/Hide</button>

}

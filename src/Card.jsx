import React, { Children } from 'react'

export default function Card({title, btnClass, children, butonText}) {
  return (
  <div style={{ width: '18rem' }}>
    <div className="card-body">
      <div className="card-title">{title}</div>
      <p className="card-content">
        {children}
      </p>
      {/* <button class={btnClass}>{butonText}</button> */}
  </div>
</div>

  )
}

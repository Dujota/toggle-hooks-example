import React from 'react'

export default function Card({title, children}) {
  return (
    <div style={{ width: '18rem' }}>
      <div className="card-body">
        <div className="card-title">{title}</div>
        <p className="card-content">
          {children}
        </p>
      </div>
    </div>
  )
}

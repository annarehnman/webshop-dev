import React from 'react'

export default function HomePage({ products }) {
  return (
    <div>
      <h1>HomePage</h1>
      {products.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}

import React from 'react'

export default function ProductList({ products }) {

  return (
    <div>
      {products.map(p => (
        <div key={p}>{p}</div>
      ))}
    </div>
  )
}

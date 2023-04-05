import React from 'react'

function Card({title, price}:{title:string, price:number}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
    </div>
  )
}

export default Card

import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [ditails, setDetails] = useState(false)

  const btnClassName = ditails ? "bg-yellow-400" : "bg-blue-400"

  const btnClasses = [
    'py-2 px-4 border',btnClassName
  ]

  return (
    <div className='border py-2 px-4 rounded flex  flex-col mb-2'>
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p> {product.title}</p>
      <p className='font-bold'>{product.price}</p>
      <button className={btnClasses.join(' ')} onClick={() => setDetails(prev =>!prev)}>{ditails ? 'hide': 'show'}</button>

      {/* <p>{product.description}</p> */}
      {ditails && <div className="">
        <p>{product.description}</p>
        <p>Reit: <span style={{fontWeight:'bold'}}>{product?.rating?.rate}</span></p>
      </div>}
    </div>
  )
}

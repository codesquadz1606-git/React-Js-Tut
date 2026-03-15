import React from 'react'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import ProductRating from './ProductRating'
import ProductModel from './ProductModel'

const Product = ({name,price,rating,model}) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <ProductName name={name}/>
      <ProductPrice price={price}/>
      <ProductRating rating={rating}/>
      <ProductModel model={model}/>
    </div>
  )
}

export default Product

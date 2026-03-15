import { useState } from "react";
import "./App.css"
import Data from "./Data";
import Product from "./Products/Product";

export default function App(){
  let name="Sanchit";
  let city="Gurgaon"

  let details=[
    {
      "name":"Google Pixel",
      "price":90000,
      "rating":5,
      "model":10
    },
    {
      "name":"Iphone",
      "price":100000,
      "rating":5,
      "model":17
    },
    {
      "name":"Oneplus",
      "price":60000,
      "rating":4.5,
      "model":15
    },
    {
      "name":"Vivo",
      "price":40000,
      "rating":3.9,
      "model":23
    },
    {
      "name":"Xiaomi",
      "price":75000,
      "rating":4.7,
      "model":21
    },
  ]

  const [data,setData]=useState(0)
  console.log(data)

  return(
    <>
      {/* <h1>Second Class</h1>
      <Data name={name} city={city}/> */}

      {/* {
        details.map((el)=>(
          <Product name={el.name} price={el.price} rating={el.rating} model={el.model}/>
        ))
      } */}

      <button onClick={()=>{setData(data+1)}}>+</button>
      <span>{data}</span>
      <button onClick={()=>{setData(data-1)}}>-</button>
    </>
  )
}
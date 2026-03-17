import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {
  const PAGE_SIZE=12;
  let url = "https://dummyjson.com/products?limit=500"
  const [products, setProducts] = useState([]);

  const[current,setCurrent]=useState(0);
  // function dataFetch(){
  //   fetch(url)
  //   .then((res)=>{
  //     return res.json()
  //   })
  //   .then((data)=>{
  //     console.log(data)
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   })
  // }

  async function dataFetch() {
    let res = await axios.get(url)
    // console.log(res.data.products)
    let data = res.data.products
    setProducts(data, ...products)
  }

  useEffect(() => {
    dataFetch()
  }, [])

  console.log(products)

  const noOfPages=Math.ceil(products.length/PAGE_SIZE)
  console.log(noOfPages)

  const start=current*PAGE_SIZE
  const end=start+PAGE_SIZE

  return (
    <div>
      <div style={{display:"flex",flexWrap:"wrap",gap:"30px",justifyContent:"center"}}>
        {
          products.slice(start,end).map((el) => (
            <div style={{width:"300px",padding:"20px",border:"2px solid white",borderRadius:"30px"}}>
              <h2>{el.title}</h2>
              <img src={el.thumbnail} alt="" />
              <p>{el.description}</p>
              <p>Rs {Math.ceil(el.price*90)}/-</p>
              <button style={{padding:"10px 20px"}}>Buy Now</button>
            </div>
          ))
        }
      </div>
      
      {
        Array(noOfPages).keys().map((el)=>(
          <button onClick={()=>{setCurrent(el)}} style={{marginRight:"20px",padding:"5px 10px",marginTop:"30px"}}>{el+1}</button>
        ))
      }
    </div>
  )
}

export default App

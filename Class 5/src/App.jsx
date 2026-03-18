import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";


const App = () => {
  const PAGE_SIZE = 12;
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  // const [active,setActive]=useState(false)

  const [current, setCurrent] = useState(0);
  let url = `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${current * PAGE_SIZE}`
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
    setTotal(res.data.total)
  }

  useEffect(() => {
    dataFetch()
  }, [current])

  console.log(products)
  console.log(total)

  const noOfPages = Math.ceil(total / PAGE_SIZE)
  console.log(noOfPages)

  const start = current * PAGE_SIZE
  const end = start + PAGE_SIZE

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center" }}>
        {
          products.map((el) => (
            <div style={{ width: "300px", padding: "20px", border: "2px solid white", borderRadius: "30px" }}>
              <h2>{el.title}</h2>
              <img src={el.thumbnail} alt="" />
              <p>{el.description}</p>
              <p>Rs {Math.ceil(el.price * 90)}/-</p>
              <button style={{ padding: "10px 20px" }}>Buy Now</button>
            </div>
          ))
        }
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>

        {/* <button style={{ backgroundColor: "transparent", border: "none" }}> */}
          <IoIosArrowDropleftCircle disabled={current==0} onClick={() => { setCurrent(current - 1) }} size="30" style={{ marginRight: "20px" }} />
        {/* </button> */}
        {
          Array(noOfPages).keys().map((el) => (
            <button
              onClick={() => { setCurrent(el); }}
              style={{ marginRight: "20px", padding: "5px 10px" }}
            // className={active?"active":""}
            >{el + 1}</button>
          ))
        }
        {/* <button disabled={current == noOfPages} style={{ backgroundColor: "transparent", border: "none" }}> */}
          <IoIosArrowDroprightCircle disabled={current >= noOfPages-1} onClick={() => { setCurrent(current + 1) }} size="30" />
        {/* </button> */}
      </div>
    </div>
  )
}

export default App

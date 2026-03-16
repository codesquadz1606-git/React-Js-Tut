import React, { useEffect, useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  // const [count2,setCount2]=useState(10)

  // useEffect means to handle the side-effect

  // useEffect has 3 methods:
  // Method 1: Without any Dependency : It will execute on every update in a compenent
  // Method 2: With Empty Array : Only runs at the first refresh mostly used in api calling.
  // Method 3: With a Dependency : Only runs with their is change in the dependency.

  // Syntax
  // useEffect(callback,dependency);

  // Method 1: On every change in the component
  // useEffect(()=>{
  //   document.title=count
  //   console.log(count)
  // })
  
  // Method 2 :
  // useEffect(()=>{
    //   console.log(count)
    // },[])
    
    // Method 3: 
  //   useEffect(()=>{
  //   document.title=count
  //   console.log(count)
  // },[count])
  // console.log(count2)

  let url="https://jsonplaceholder.typicode.com/posts"

  function dataFetch(){
    fetch(url)
    .then((res)=>{
      console.log(res)
      return res.json()
    })
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    dataFetch()
  },[])
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>{setCount(count+1)}}>+</button>

      {/* <div>{count2}</div>
      <button onClick={()=>{setCount2(count2+10)}}>+10</button> */}
    </div>
  )
}

export default App

import { useState } from "react";
import "./App.css";
export default function App() {
  const [data, setData] = useState(10);
  console.log(data);

  const [status,setStatus]=useState(true);

  const [theme,setTheme]=useState(true)
  // true h toh dark theme
  // false h toh light theme

  return (
    <>
      {/* <button onClick={()=>{setData(data+10)}}>+</button>
      {data}
      <button disabled={data==10} onClick={()=>{setData(data-10)}}>-</button> */}

      {/* {status && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi soluta nihil quos, architecto placeat assumenda facilis laboriosam asperiores. Quam neque ut facilis voluptates vel facere eaque tempora dolores iste sapiente architecto atque, amet iure necessitatibus quibusdam doloremque! Magnam iure optio perspiciatis eum, a ea reiciendis porro eveniet dolorum placeat.</p>}
      <button onClick={()=>{setStatus(!status)}}>{(status)? "Hide Content":"Show Content"}</button> */}


      <div className={(theme)?"dark":"light"}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas autem voluptate optio, doloremque nihil atque ea assumenda minima vero sit accusantium amet blanditiis culpa iusto debitis accusamus adipisci ab ducimus provident consequatur odio voluptates eos voluptatem! Accusantium asperiores minus porro id repudiandae eum libero impedit pariatur autem odit aspernatur facilis nisi deserunt nam quidem similique accusamus, perspiciatis ratione vitae, illo fuga molestias quo. Sapiente, at totam ducimus vitae ipsum dolore laudantium omnis amet mollitia explicabo facere, iusto similique et id, qui odio. Praesentium sapiente nisi amet quisquam nam libero dolore modi, aliquid quos in, voluptatem quod eos eum commodi reiciendis?
        </p>

        <button className={(theme)?"light":"dark"} onClick={()=>{setTheme(!theme)}}>{(theme)?"Light Theme":"Dark Theme"}</button>
      </div>
    </>
  );
}

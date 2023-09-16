

import { useEffect, useState } from "react"
import "./App.css"
//import { Button } from "bootstrap"
 //import MyNavbar from "./component/Navbar"
 //import 'bootstrap/dist/css/bootstrap.min.css';
 //import MyCard from "./component/card";
// import Body from "./component/Body";
 





// const [co,setco]=useState(["html","css","javascript"])
// const addCourse =()=>{
//   co.push("react")
//   setco([...co])

// }
// console.log(co)
// const [userName,setUserName]=useState()
// const click =(e)=>{
  
//  setUserName(e.target.value)
// }
// const app=(N1,N2)=>{
//   console.log( "HELLO", N1+N2)
// }  
// const arr=["mango","peach","arroo"]
// const cars=[
//   {id:1,brand:"odi"},
//   {id:1,brand:"rush"},
//   {id:1,brand:"belta"},
// ]




const App=()=>{
  //  const [login,setlogin]=useState(2)
  // const [num,setNum]=useState(0)
  // const [nums,setNums]=useState(0)
    useEffect(()=>{
      // alert('Click this button')
      console.log('click this btn')
    })
    console.log('click this b')
  // const [count,setCount]=useState(0)
  // const add=()=>{
  //  setCount(count+1)
  // }
  // const sub=()=>{
  // setCount(count-1)  
  // }
// return(
//   <>
//   {/* {login==1?<h1>1</h1>:login==2?<h1>2</h1>:<h1>3</h1>} */}
//   </>
// )

  return(
<>
{/* 
  <button onClick={()=>{setNum(num+1)}}>{num}</button>
  <button onClick={()=>{setNums(nums+1)}}>{nums}</button> */}
  {/* <button onClick={add}>+</button>
  <span>{count}</span>
  <button onClick={sub}>-</button>
   
      {
    arr.map((value,index)=>{
      
      return(
        <h1 key={index}>{value}</h1>
      )
    })
   } */}
   {/* {
    cars.map((car,index)=>{
      console.log(car)
      return(
        <h1 key={index}>{car.brand}</h1>
      )
    })
   } */}
  {/* <button onClick={add}>+</button>
  <span>{count}</span>
  <button onClick={sub}>-</button>
  */}
  {/* <button onClick={addCourse}>ADD COURSE</button> */}
  {/* <input type="text" onChange={(e)=>click(e)}></input>
  <h1>{userName}</h1> */}
  {/* <button onClick={click}></button> */}
  {/* <button onClick={()=>app(20,20)}>CLICK</button>
   <MyNavbar home="home" title="MD"/>
  <MyCard/>
  <Body/> as
  <MyCard/>*/}
  </>

  )}

  export default App
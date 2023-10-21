import React from "react";

const Car=({item,id,handleClick})=>{

    const itemClass= item.stat ? " active " + item.stat :""
    return(
       <div className={"Car" + itemClass} onClick={()=>{handleClick(id)}}>
        <img src={item.img} alt=""/>
       </div>
    )
}
export default Car
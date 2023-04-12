import React from "react";
// import ProductCard from "./ProductCard";

const ToolTip = ({x, y, content:{name}}) => {


    return (
        <div  style={{position: "absolute", background: "red", left: x, top: y }} >
            
            <p>{name}</p>
            {/* <p>{price}</p> */}
            {/* <p>rating: count:{count}, rate: {rate}</p> */}
        </div>

    )
}
export default ToolTip
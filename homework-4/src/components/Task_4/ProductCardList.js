import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import ToolTip from "./Tooltip";

const ProductsList = ({ url, renderСontainer }) => {
    
    const [dataProducts, setDataProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setDataProducts(json))
    }, [])
    console.log(dataProducts)
    return (
        <>
        {render(dataProducts)}
        </>
    )
}
export default ProductsList
{/* {dataProducts.map(product => <ProductCard key={product.id} data={product} render ={render} />)} */}
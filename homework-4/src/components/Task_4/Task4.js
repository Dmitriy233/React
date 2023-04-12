import React from "react";
import ProductsList from "./ProductCardList";
// import ToolTip from "./Tooltip";
import ProductCard from "./ProductCard";

const BASE_PRODUCTS_URL = "https://fakestoreapi.com/products"

const Task4 = () => {
    return (
        <>
            <ProductsList url={BASE_PRODUCTS_URL} 
            render={(dataProducts) => <ProductCard  products={dataProducts} />} />

        </>
    )
}
export default Task4
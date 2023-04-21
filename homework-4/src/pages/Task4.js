import React from "react";
import ProductsList from "../components/Task_4/ProductCardList";

const BASE_PRODUCTS_URL = "https://fakestoreapi.com/products"

const Task4 = () => {
    return (
        <div className="container">
            <ProductsList url={BASE_PRODUCTS_URL} />
        </div>
    )
}
export default Task4
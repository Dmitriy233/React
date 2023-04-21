import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ url }) => {
    const [dataProducts, setDataProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(json => setDataProducts(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <>
            {dataProducts.map(product =>
                <ProductCard key={product.id}
                    product={product}
                    isLoading={isLoading}
                    error={error}
                />
            )}
        </>
    )
}
export default ProductsList

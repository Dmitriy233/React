import { useEffect, useState } from "react";

export const useFetch = (url) =>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(resp => resp.json())
            .then(json => setData(json))
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    }, [url])

    return [data, isLoading, error]
}
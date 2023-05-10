import { useEffect, useState, createContext } from "react"

const BASE_URL = "https://my.api.mockaroo.com/cards/123.json?key=778301b0"

export const DataContext = createContext();

export const DataContextProvider = (props) => {
    const [userCardData, setUserCardData] = useState([])
    useEffect(() => {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(json => setUserCardData([json]))


    }, [])
    // console.log(userCardData)
    const getParsedDateOwners = () => {
        return userCardData.map(({ user_name: userName, data }) => {
            return data.map(item => ({userName, ...item}))
        })
    }

 const pushNewCard = (data) =>{
    setUserCardData(prev => [ data ,...prev])
 }


    return (
        <DataContext.Provider value={ {getParsedDateOwners, pushNewCard}}  >
            {props.children}
        </DataContext.Provider>
    )
}
import { useState } from "react";

export const useToggler = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const setToggle = () => { 
        setValue(!value)
    }
    return [value, setToggle]
}
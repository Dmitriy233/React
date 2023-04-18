import { useState } from 'react'

export const withToggler = (WrappedComponent) => {
    return (props) => {
        const [buttonToggled, setButtonToggled] = useState(false)

        const changeToggle = (e) => {
            setButtonToggled(prev => !prev)
        }
        return <WrappedComponent {...props} toggled={buttonToggled} changeToggle={changeToggle} />
    }
}
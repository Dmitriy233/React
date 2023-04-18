import { useToggler } from "../../../hooks/useToggler";

const IMG_DEFAULT = "https://cdn-icons-png.flaticon.com/512/508/508837.png"
const IMG_LIKE = "https://cdn-icons-png.flaticon.com/512/508/508735.png"

export const Albums = ({ title, url }) => {
    const [isToggle, setToggle] = useToggler(false)
    return (
        <div>
            <h4>{title}</h4>
            <img src={url} alt="Some image" />
            <button style={{ padding: 0 }}>
                <img
                    src={isToggle ? IMG_LIKE : IMG_DEFAULT}
                    onClick={setToggle}
                    alt="Like"
                    style={{
                        width: 50,
                        height: 50,
                    }}
                />
            </button>
        </div>
    )
}
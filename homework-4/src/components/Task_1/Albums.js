import React from "react";
import { withToggler } from "../../HOCs/withToggler";

const IMG_DEFAULT = "https://cdn-icons-png.flaticon.com/512/508/508837.png"
const IMG_LIKE = "https://cdn-icons-png.flaticon.com/512/508/508735.png"

const Albums = ({ title, url, toggled, changeToggle }) => {
    return (
        <div>
            <h4>{title}</h4>
            <img src={url} alt="Some image" />
            <button style={{ padding: 0 }}>
                <img
                    src={toggled ? IMG_LIKE : IMG_DEFAULT}
                    onClick={changeToggle}
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
export default withToggler(Albums)
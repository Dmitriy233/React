import { formatDate } from "../helpers/HelpersFunction"

export const BackSide = ({ cardData }) => {


    return (
        <>
            <div key={cardData.id} style={{
                border: "1px solid black",          //переписать стили для back карты
                width: "534px", height: "334px",
                borderRadius: "48.6px",
                background: "#232343",
            }}>
                <div style={{
                    width: "534px",
                    height: "63px",
                    background: "black"
                }}></div>
                <p style={{ color: "white" }} >{formatDate(cardData.card.expiry_date)}</p>
                <p style={{ color: "white" }}>{cardData.card.cvv}</p>
            </div>

        </>
    )
}

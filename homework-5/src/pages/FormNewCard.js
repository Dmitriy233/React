import { useContext, useState } from "react"
import VISA from "../assets/VISA.svg"
import Mastercard from "../assets/Mastercard.svg"
import CardChip from "../assets/card_chip.svg"
import { DataContext } from "../context/DataContext"
import { hideCardNumber } from "../helpers/HelpersFunction"

export const FormNewCard = () => {
    const { pushNewCard } = useContext(DataContext)

    const [cardNumber, setCardNumber] = useState("")
    const [cvv, setCvv] = useState("")
    const [fullNameOwners, setFullNameOwners] = useState("")
    const [cardType, setCardType] = useState("")
    const [isCardNumberValid, setIsCardNumberValid] = useState(true)
    const [isCvvValid, setIsCvvValid] = useState(true);

    const dataNewCard = {
        data: [
            {
                card: {
                    numbers: cardNumber,
                    cvv: cvv,
                    type: cardType,
                    expiry_date: "14/4/2024",
                },
                statistic: [{}]
            }],
        id: 123,
        user_name: fullNameOwners,
    }

    const cardNumberChange = (event) => {
        setCardNumber(event.target.value)
    }
    const cvvChange = (event) => {
        setCvv(event.target.value)
    }
    const fullNameChange = (event) => {
        setFullNameOwners(event.target.value)
    }
    const cardTypeChange = (event) => {
        setCardType(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (cardNumber.length !== 13 && cardNumber.length !== 16) {
            setIsCardNumberValid(false)
            return
        } else if (cvv.length !== 3) {
            setIsCvvValid(false);
            return;
        }
        pushNewCard(dataNewCard)
        setCardNumber("")
        setCvv("")
        setFullNameOwners("")
        setCardType("")
    }

    return (
        <>
            <div
                style={{
                    border: "1px solid black",          //переписать стили для back карты
                    width: "534px", height: "334px",
                    borderRadius: "48.6px",
                    background: "#232343",
                }}
            >
                <img src={CardChip} alt="" />
                <p>{cardNumber && hideCardNumber(cardNumber)}</p>
                <p>{fullNameOwners}</p>
                {cardType === "visa" ?
                    <img style={{ width: "74px", height: "23px" }} src={VISA} alt="" /> :
                    <img style={{ width: "74px", height: "23px" }} src={Mastercard} alt="" />}
            </div>
            <form action="" onSubmit={handleSubmit} >
                <label>
                    Card number
                    <input type="text"
                        value={cardNumber}
                        onChange={cardNumberChange}
                        placeholder="Enter 13 or 16 number"
                        required />
                    {!isCardNumberValid && <p style={{ color: "red" }}>Sorry, incorrect data</p>}
                </label>
                <label>
                    CVV
                    <input type="text"
                        value={cvv}
                        onChange={cvvChange}
                        placeholder="Enter cvv"
                        required />
                    {!isCvvValid && <p>sorry incorrect data</p>}
                </label>
                <label>
                    Your full name
                    <input type="text"
                        onChange={fullNameChange}
                        value={fullNameOwners}
                        placeholder="Enter full name"
                        required />
                </label>
                <label>
                    VISA or MASTERCARD
                    <label >
                        <input type="radio" onChange={cardTypeChange} name="typeCard" value="visa" required />
                        Visa
                    </label>
                    <label>
                        <input type="radio" onChange={cardTypeChange} name="typeCard" value="mastercard" required />
                        Mastercard
                    </label>
                </label>
                <button>Add card</button>
            </form>
        </>
    )
}
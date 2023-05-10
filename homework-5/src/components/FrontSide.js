import styled from 'styled-components';
import { useState } from "react"
import VISA from "../assets/VISA.svg"
import Mastercard from "../assets/Mastercard.svg"
import CardChip from "../assets/card_chip.svg"
import { hideCardNumber } from "../helpers/HelpersFunction"
import { cardNumberSpace } from "../helpers/HelpersFunction"
import { Statistics } from "./Statistics"
import flip from "../assets/flip.svg"
import businessman from "../assets/businessman.svg"
import viewHidden from "../assets/viewhiden.svg"
import view from "../assets/view.svg"

const CardBlock = styled.div`
position: relative;
  border: 1px solid black;
  width: 534px;
  height: 334px;
  border-radius: 48.6px;
  background: #232343;
  z-index: 10;
  padding-bottom: 65px

`;

const ChipImg = styled.img`
padding: 85px 0 0 56px;
margin-bottom: 28px
`;

const CardNumber = styled.p`
  color: white;
  padding-left: 56.7px;
  font-weight: 400;
font-size: 30px;
line-height: 38px;
letter-spacing: 4.17391px;
`;

const CarBlockOwner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 59px  56px;
`;

const TypeCard = styled.img`
  width: 74px;
  height: 23px;
`;

const UserFullName = styled.p`
  color: white;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  letter-spacing: 2.4px;
`;

const ToolbarBlock = styled.div`
  background: #DDDDE5;
  border-bottom-left-radius: 48.6px;
  border-bottom-right-radius: 48.6px;
  width: 520px;
  transition: 1s;
  transform: translateY(${props => props.isShownToolbar ? '0' : '-40%'});
  display: flex;
  justify-content: center; 
  align-items: end;
  margin-left: 7px;


`;

const Buttons = styled.button`
width: 156px;
background: none;
border:none;
border-right: 1px solid black;
&:last-of-type{
    border:none;
}
`;

export const FrontSide = ({ cardData}) => {
    const [isShownToolbar, setIsShownToolbar] = useState(false)
    const [isShownCardNumber, setIsShownCardNumber] = useState(false)
    const [isShownStatistics, setIsShownStatistics] = useState(false)

    const showToolbar = () => {
        setIsShownToolbar(prev => !prev)
    }
    const showNumber = () => {
        setIsShownCardNumber(prev => !prev)
    }
    const showStatistic = () => {
        setIsShownStatistics(prev => !prev)
    }
    return (
        <>
            <CardBlock key={cardData.id} onClick={showToolbar}>
                <ChipImg src={CardChip} alt="Card Chip" />
                <CardNumber>
                    {!isShownCardNumber ? hideCardNumber(cardData.card.numbers) : cardNumberSpace(cardData.card.numbers)}
                </CardNumber>

                <CarBlockOwner>
                    <UserFullName>{cardData.userName}</UserFullName>
                    {cardData.card.type === "visa" ?
                        <TypeCard src={VISA} alt="visa" /> :
                        <TypeCard src={Mastercard} alt="Mastercard" />}
                </CarBlockOwner>
            </CardBlock>
            <ToolbarBlock style={{ height: isShownToolbar ? '100px' : '0', overflow: 'hidden' }}>
                <Buttons onClick={showNumber}>{!isShownCardNumber ? <img src={viewHidden} /> : <img src={view} />}</Buttons>
                <Buttons onClick={showStatistic}><img src={businessman} alt="statistics" /></Buttons>
                <Buttons><img src={flip} alt="flip card" /></Buttons>
            </ToolbarBlock>

            {isShownStatistics && <Statistics />}

        </>

    )
}





import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import { BackSide } from "../components/BackSide"
import { FrontSide } from "../components/FrontSide"
import styled from 'styled-components';



export const CardWrapper = () => {
    const { getParsedDateOwners } = useContext(DataContext)

    const Sides = styled.div`

      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 1s;
      backface-visibility: hidden;
    `;

    const Front = styled(Sides)` 
    `;

    const Back = styled(Sides)`
   
      transform: rotateY(180deg);
    `;

    const CardContainer = styled.div`
    width: 534px;
    height: 334px;
      position: relative;
      perspective: 1000px;

      &:hover > ${Front} {
        transform: rotateY(180deg);
      }

      &:hover > ${Back} {
        transform: rotateY(360deg);
      }
    `;

    return (
        <>
            <h1>Your cards</h1>
            <button>+</button>

            {getParsedDateOwners().map(data => {
                return data.map(cardData => {
                    return (
                        <>
                            <CardContainer>
                                <Front>
                                    <FrontSide cardData={cardData} />
                                </Front>
                                <Back>
                                    <BackSide cardData={cardData} />
                                </Back>
                            </CardContainer>
                        </>
                    )
                })

            })}

        </>
    )
}






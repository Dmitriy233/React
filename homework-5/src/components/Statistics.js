
import { useContext } from "react";
import styled from 'styled-components';
import { DataContext } from "../context/DataContext";

const StatisticBlock = styled.div`
max-width: 534px;
display: flex;
justify-content: space-around;

`;

const StatContainer = styled.div`
background: #DDDDE5;
max-width: 535px;
`;


export const Statistics = () => {
    const { getParsedDateOwners } = useContext(DataContext)
    return (
        <StatContainer>
            <h2>Stat card</h2>
            {getParsedDateOwners().map(data => {
                return data.map(stat => {
                    return stat.statistic.map(statData => <StatisticBlock>
                        <p>{statData.date}</p>
                        <p>{statData.place}</p>
                        <p>{statData.expense},{statData.currency}</p>
                    </StatisticBlock>)
                })
            })}
        </StatContainer>
    )
}
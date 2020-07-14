import React, { useEffect } from 'react';
import LeaderboardList from './LeaderboardList';
import Header from './Header';
import styled from 'styled-components';
import Pointsbutton from './PointsButton';
import { NavLink } from 'react-router-dom';

const Main = styled.div`
    margin: 0;
    /* border: 2px solid blue;  */
    height: 100%;
    background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(181,181,181,1) 46%, rgba(255,255,255,1) 100%);


`
const LeaderboardContainer = styled.div`
    height: 70%;
`

export default function Leaderboard (props) {
    let newLeaderboard = props.users.sort((a,b) => {
        return b.points - a.points
    })
   

    
    return (
        
        <Main>           
            
            <Header
                name = {newLeaderboard && newLeaderboard.length && newLeaderboard[0].name}
                avatar = {newLeaderboard && newLeaderboard.length && newLeaderboard[0].avatar}
                points = {newLeaderboard && newLeaderboard.length && newLeaderboard[0].points}/>
            <LeaderboardContainer>
                <LeaderboardList players = {newLeaderboard}/>
            </LeaderboardContainer>
        </Main>
    )

  
}

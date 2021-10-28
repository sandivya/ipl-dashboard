import {React, useState, useEffect} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

    const [team, setTeam] = useState({teamName: "", matches: []});

    useEffect(() => {
        const fetchTeamDetails = async () => {
            const response = await fetch('http://localhost:8080/team/Delhi%20Daredevils');
            const data = await response.json();
            setTeam(data);
         }

        fetchTeamDetails();
    }, [])

    return (
    <div className="teamPage">
        <h1>{team.teamName}</h1>

        <MatchDetailCard match={team.matches[0]}/>

        {team.matches.slice(1).map(match => {
            return <MatchSmallCard match={match} key={match.id}/>
        })}

    </div>
    );
}
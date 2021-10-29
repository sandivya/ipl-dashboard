import {React, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { PieChart } from 'react-minimal-pie-chart';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

import './TeamPage.scss';

export const TeamPage = () => {

    const [team, setTeam] = useState({teamName: "", matches: [], totalWins: 0, totalMatches: 0});
    const {teamName} = useParams();

    useEffect(() => {
        const fetchTeamDetails = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}`);
            const data = await response.json();
            setTeam(data);
         }

        fetchTeamDetails();
    }, [teamName])

    if(!team || !team.teamName){
        return <h1>404! Team Not Found.</h1>
    }

    return (
    <div className="TeamPage">
        <div className="team-name-section"><h1 className="team-name">{team.teamName}</h1></div>
        <div className="win-loss-section">
        <PieChart
        data={[
            { title: 'Lose', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
            { title: 'Win', value: team.totalWins, color: '#4da375' }
        ]}
        radius={45}
        />
        </div>

        <div className="match-detail-card-section">
            <h3>Latest Match</h3>
            <MatchDetailCard teamName={team.teamName} match={team.matches[0]}/>
        </div>

        {team.matches.slice(1).map(match => {
            return <MatchSmallCard match={match} key={match.id} teamName={team.teamName}/>
        })}

        <div className="more">
            <a href={`http://localhost:8080/team/${teamName}`}>More &gt;</a>
        </div>

    </div>
    );
}
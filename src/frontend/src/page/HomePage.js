import {React, useEffect, useState} from 'react';
import { TeamTile } from '../components/TeamTile';
import {Link} from 'react-router-dom';
import './HomePage.scss';
import { HomePageRedirect } from '../components/HomePageRedirect';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchAllTeamName = async() => {
            const response = await fetch(`${process.env.REACT_APP_ROOT_API_URL}/team`);
            const data = await response.json();
            setTeams(data);
        }
        fetchAllTeamName();
    })

    return (
        <div className="home-page">
            <HomePageRedirect/>
            <div className="team">
                {teams.map((team) => {
                    return <Link to={`/team/${team.teamName}`} key={team.teamName}><TeamTile team={team.teamName}/></Link>
                })}
            </div>
        </div>
    )
}

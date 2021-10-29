import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { HomePageRedirect } from '../components/HomePageRedirect';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { YearSelector } from '../components/YearSelector';

import './MatchPage.scss'

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(() => {
        const fetchMatchesByYear = async () => {
            const response = await fetch(`${process.env.REACT_APP_ROOT_API_URL}/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        }

        fetchMatchesByYear();
    }, [teamName, year])

    if(!matches.length){
        return (
            <div>
                <HomePageRedirect/>
                <h1>Data Not Found. Maybe try choosing another year.</h1>
                <div align="center"><YearSelector teamName={teamName}/></div>
            </div>

        );
    }

    return (
        <div>

        <HomePageRedirect/>
        <div className="match-page">

        <div className="years">
            <YearSelector teamName={teamName}/>
        </div>

        <div className="match-details">
            <h1 className="team-year">{teamName} matches in year {year}</h1>
            {matches.map((match) => {
           return <MatchDetailCard match={match} teamName={teamName} key={match.id}/>
        })}
        </div>
        
    </div>
        </div>

    );
}
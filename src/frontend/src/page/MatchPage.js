import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { MatchDetailCard } from '../components/MatchDetailCard';


export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const {teamName, year} = useParams();

    useEffect(() => {
        const fetchMatchesByYear = async () => {
            const response = await fetch(`http://localhost:8080/team/${teamName}/matches?year=${year}`);
            const data = await response.json();
            setMatches(data);
        }

        fetchMatchesByYear();
    }, [teamName, year])

    if(!matches.length){
        return <h1>Data Not Found.</h1>
    }

    return (
    <div className="teamPage">
        {matches.map((match) => {
           return <MatchDetailCard match={match} teamName={teamName} key={match.id}/>
        })}
    </div>
    );
}
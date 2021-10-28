import {React} from 'react';

export const MatchDetailCard = ({match}) => {
    return (
        <div className="matchDetailCard">
            <h3>Latest Match</h3>
            <h4>Match Details</h4>
            <h4>{match?.team1} vs {match?.team2}</h4>
        </div>
    )
}
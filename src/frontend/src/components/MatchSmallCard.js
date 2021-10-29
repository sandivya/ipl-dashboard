import {React} from 'react';
import {Link} from 'react-router-dom';

import './MatchSmallCard.scss'

export const MatchSmallCard = ({teamName, match}) => {

    const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
    const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={isMatchWon ? 'match-small-card won-card' : 'match-small-card lost-card'}>
            <span className="vs">vs</span>
            <h3>
                <Link to={`/team/${otherTeam}`}>
                    {otherTeam}
                </Link>
            </h3>
            <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.resultMargin === 1 ?  match.result.slice(0, -1) : match.result}</p>
        </div>
    )
}
import {React} from 'react';
import {Link} from 'react-router-dom';

import './MatchDetailCard.scss'

export const MatchDetailCard = ({match, teamName}) => {

    const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
    const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={isMatchWon ? 'match-detail-card won-card' : 'match-detail-card lost-card'}>
            
            <div className="primary-details">

            <span className="vs">vs</span>
            <h1 className="other-team-name">
                <Link to={`/team/${otherTeam}`}>
                    {otherTeam}
                </Link>
            </h1>

            <span className="on">on</span>
            <h3 className="match-date">{match.date}</h3>

            <span className="at">at</span>
            <h3 className="match-venue">{match.venue}, {match.city}</h3>

            <h1 className="match-winner">{match.matchWinner}<br/> won by {match.resultMargin} {match.resultMargin === 1 ?  match.result.slice(0, -1) : match.result}.</h1>

            </div>

            <div className="other-details">

                <h3>First Inning</h3>
                <p>{match.team1}</p>

                <h3>Second Inning</h3>
                <p>{match.team2}</p>

                <h3>Toss Winner</h3>
                <p>{match.tossWinner}, chose to {match.tossDecision}</p>

                <h3>Man of the Match</h3>
                <p>{match.playerOfMatch}</p>

                <h3>Umpires</h3>
                <p>{match.umpire1}, {match.umpire2}</p>
            </div>

        </div>
    )
}
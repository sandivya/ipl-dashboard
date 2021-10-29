import {React} from 'react';
import './TeamTile.scss';

export const TeamTile = ({team}) => {
    return (
        <div className="team-single-tile">
            <h1 className="team-name">{team}</h1>
        </div>
    )
}
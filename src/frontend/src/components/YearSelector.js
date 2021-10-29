import {React} from 'react';
import {Link} from 'react-router-dom';
import './YearSelector.scss';

export const YearSelector = ({teamName}) => {
    const START_YEAR = process.env.REACT_APP_START_YEAR;
    const END_YEAR = process.env.REACT_APP_END_YEAR;
    console.log(START_YEAR)

    var year = [];

    for(var i=START_YEAR; i<=END_YEAR; i++){
        console.log(i);
        year.push(i);
    }

    

    return (
        <div className="year-selector">
            <h1>Select Year</h1>
            <ol>
                {year.map((y) => {
                    return <li className={y} key={y}><Link to={`/team/${teamName}/matches/${y}`}>{y}</Link></li>
                })}
            </ol>
        </div>
    )
}
import {React} from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
    return (
    <div className="teamPage">
        <h1>Team Dashboard</h1>
        <MatchDetailCard/>
        <MatchSmallCard/>
        <MatchSmallCard/>
        <MatchSmallCard/>
    </div>
    );
}
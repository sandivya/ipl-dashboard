package io.javabrains.ipldashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import io.javabrains.ipldashboard.model.Team;
import io.javabrains.ipldashboard.repository.MatchRepository;
import io.javabrains.ipldashboard.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {

    
    @Autowired TeamRepository teamRepository;
    @Autowired MatchRepository matchRepository;
    
    // public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
    //     this.teamRepository = teamRepository;
    //     this.matchRepository = matchRepository;
    // }

    @GetMapping("/team/{teamName}")
    public Team getTeamDetails(@PathVariable String teamName){
        Team team = teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchByTeam(teamName, 4));
        return team;
    }
    
}

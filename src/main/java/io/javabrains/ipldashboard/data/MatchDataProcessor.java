package io.javabrains.ipldashboard.data;

import java.time.LocalDate;

import org.springframework.batch.item.ItemProcessor;
import io.javabrains.ipldashboard.model.Match;

public class MatchDataProcessor implements ItemProcessor<MatchInput, Match> {

  public MatchDataProcessor() {
  }

  @Override
  public Match process(final MatchInput matchInput) throws Exception {
    
    Match match = new Match();

    match.setId(Long.parseLong(matchInput.getId()));
    match.setCity(matchInput.getCity());
    match.setDate(LocalDate.parse(matchInput.getDate()));
    match.setPlayerOfMatch(matchInput.getPlayerOfMatch());
    match.setVenue(matchInput.getVenue());
    match.setTossWinner(matchInput.getTossWinner());;
    match.setTossDecision(matchInput.getTossDecision());
    match.setMatchWinner(matchInput.getWinner());
    match.setResult(matchInput.getResult());
    match.setResultMargin(matchInput.getResultMargin());
    match.setUmpire1(matchInput.getUmpire1());
    match.setUmpire2(matchInput.getUmpire2());

    String firstInningTeam, secondInningTeam;

    if(matchInput.getTossDecision().equals("bat")){
        firstInningTeam = matchInput.getTossWinner();
        secondInningTeam = firstInningTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    } else {
        secondInningTeam = matchInput.getTossWinner();
        firstInningTeam = secondInningTeam.equals(matchInput.getTeam1()) ? matchInput.getTeam2() : matchInput.getTeam1();
    }

    match.setTeam1(firstInningTeam);
    match.setTeam2(secondInningTeam);

    return match;
  }

}
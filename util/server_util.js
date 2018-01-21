
const parseTeamName = (team) => {
  let teamNameArray = team.split(" ");
  let teamName = teamNameArray[teamNameArray.length-1];

  if (teamName == 'Blazers') {
    teamName = "Trail Blazers";
  }
  return teamName;
};

const formatSeason = (startYear) => {
  const endYear = startYear+1;
  return `${startYear}-${String(endYear).slice(2)}`;
};

module.exports = {formatSeason, parseTeamName};

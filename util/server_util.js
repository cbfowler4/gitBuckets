
const parseTeamName = (team) => {
  let teamNameArray = team.split(" ");
  let teamName = teamNameArray[teamNameArray.length-1];

  if (teamName == 'Blazers') {
    teamName = "Trail Blazers";
  } else if (teamName == 'Hornets' && teamNameArray[0] === 'New') {
    teamName = 'NO_Hornets';
  }
  return teamName;
};

const formatSeason = (startYear) => {
  const endYear = startYear+1;
  return `${startYear}-${String(endYear).slice(2)}`;
};

module.exports = {formatSeason, parseTeamName};

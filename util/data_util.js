export const parseSeasonData = (seasonData) => {
  const parsedObj = {};

  Object.keys(seasonData).forEach((year) => {
    let sortedArray = Object.keys(seasonData[year]).sort();
    parsedObj[year] = sortedArray.map((teamId) => {
      return seasonData[year][teamId];
    });
  });

  return parsedObj;
};


export const parseTeamName = (team) => {
  let teamNameArray = team.split(" ");
  let teamName = teamNameArray[teamNameArray.length-1];

  if (teamName == 'Blazers') {
    teamName = "Trail Blazers";
  }
  return teamName;
};

export const formatSeason = (startYear) => {
  const endYear = startYear+1;
  return `${startYear}-${String(endYear).slice(2)}`;
};

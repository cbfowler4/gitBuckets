import Store from '../store/store';
import { formatTeamName } from '../util/data_util';

export const updateTeamShow = () => {
  const teamShow = document.getElementById('team-sidebar');

  // `<h1>${Store.activeTeam != null ? formatTeamName(Store.activeTeam.teamName) : ""}</h1>
  teamShow.innerHTML = (
    `<img src="assets/images/logos/${Store.activeTeam != null ? Store.activeTeam.logo : "nba.png"}"></img>
    <ul>
      <li>Wins: ${Store.activeTeam != null ? Store.activeTeam.wins : ""}</li>
      <li>Losses: ${Store.activeTeam != null ? Store.activeTeam.losses : ""}</li>
    </ul>`
  );
};

import Store from '../store/store';
import { formatTeamName } from '../util/data_util';

export const updateTeamContainer = () => {
  const teamContainer = document.getElementById('team-sidebar');

  teamContainer.innerHTML = (
    `<h1>${Store.activeTeam != null ? formatTeamName(Store.activeTeam.teamName) : ""}</h1>
    <img src="/images/logos/${Store.activeTeam != null ? Store.activeTeam.logo : "nba.png"}"></img>
    <ul>
      <li>Wins: ${Store.activeTeam.wins}</li>
      <li>Losses: ${Store.activeTeam.losses}</li>
    </ul>`
  );
};

export const updateNodes = () => {
  Store.nodes.updateNodes();
};

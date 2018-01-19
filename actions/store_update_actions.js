import Store from '../store/store';

export const updateTeamContainer = () => {
  const teamContainer = document.getElementById('team-sidebar');

  teamContainer.innerHTML = (
    `<h1>${Store.activeTeam != null ? Store.activeTeam.teamName : ""}</h1>
    <img src="/images/logos/${Store.activeTeam != null ? Store.activeTeam.logo : "nba.png"}"></img>
    <ul>
      <li>Wins: ${Store.activeTeam.wins}</li>
      <li>Losses: ${Store.activeTeam.losses}</li>
    </ul>`
  );
};

export const updateNodeValues = () => {
  Store.nodes.updateNodeValues();

};

import Store from '../store/store';
import { formatTeamName } from '../util/data_util';
import { loadImages } from '../util/photos_loader';

export const updateTeamShow = () => {
  const teamShow = document.getElementById('team-sidebar');
  const activeNode = document.getElementById(Store.activeTeam.teamName);

  teamShow.innerHTML = (
    `<div id=logo-placeholder></div>
    <ul>
      <li>Wins: ${Store.activeTeam != null ? Store.activeTeam.wins : ""}</li>
      <li>Losses: ${Store.activeTeam != null ? Store.activeTeam.losses : ""}</li>
    </ul>`
  );

  const logoPlaceholder = document.getElementById('logo-placeholder');
  teamShow.replaceChild(Store.logos[Store.activeTeam.teamName], logoPlaceholder);
};

export const setupTeamShow = () => {
  const teamShow = document.getElementById('team-sidebar');

  teamShow.addEventListener('mouseover', () => {
    teamShow.style.display = 'flex';
  });

  teamShow.addEventListener('mouseout', () => {
    teamShow.style.display = 'none';
  });

  document.addEventListener('load', loadImages());
};

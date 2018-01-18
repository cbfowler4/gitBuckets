import br from 'basketball-reference';

class Standings {

  getStandings() {
    br.getLeagueStandings(2013, (data) => {
      console.log(data);
    });
  }
}

export default Standings;

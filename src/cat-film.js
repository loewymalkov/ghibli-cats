export class CatFilm {
  getFilmByCat(catKey) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let filmKey;
      if (`${catKey}` === `${process.env.JIJI_KEY}`) {
        filmKey = `${process.env.KIKI_FILM_KEY}`;
      } else if (`${catKey}` === `${process.env.CATBUS_KEY}`) {
        filmKey = `${process.env.TOTORO_FILM_KEY}`;
      } else if (`${catKey}` === `${process.env.NIYA_KEY}`) {
        filmKey = `${process.env.MONONOKE_FILM_KEY}`;
      } else {
        filmKey = `${process.env.CAT_RETURNS_FILM_KEY}`;
      }

      const url = `https://ghibliapi.herokuapp.com/films/${filmKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

// ((`${catKey}` === `${process.env.MOON_KEY}`) || (`${catKey}` === `${process.env.CAT_KING_KEY}`) || (`${catKey}` === `${process.env.YUKI_KEY}`) || (`${catKey}` === `${process.env.HARU_KEY}`) || (`${catKey}` === `${process.env.BARON_HUMBERT_VON_GIKKINGEN_KEY}`) || (`${catKey}` === `${process.env.NATORI_KEY}`))

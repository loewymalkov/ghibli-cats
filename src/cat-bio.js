export class CatBio {
  getBioByCat(catKey) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://ghibliapi.herokuapp.com/people/${catKey}`

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

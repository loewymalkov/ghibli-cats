import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#cat-form').submit(function(event) {
    event.preventDefault();
    let catKey = $('#cat-list').val();

    let promise = new Promise(function(resolve, reject) {
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

    promise.then(function(response) {
      const body = JSON.parse(response);

      $("#films").html(`To check out the movie it is in, click on <a href="${body.films[0]}">this</a>.`);
      $('#bio').html(`<li class="list-group-item"> Name: ${body.name}</li> <li class="list-group-item"> Eye Color: ${body.eye_color}</li> <li class="list-group-item"> Hair Color: ${body.hair_color}</li>`);

      if (`${body.name}` === 'Jiji') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/6/67/Jiji.png/revision/latest?cb=20110716012648" alt="picture of Jiji">`));
      } else if (`${body.name}` === 'Catbus') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg/revision/latest?cb=20181024032653" alt="picture of Catbus">`));
      } else if (`${body.name}` === 'Niya') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/5/5a/Niya.jpg/revision/latest?cb=20181030225242" alt="picture of Niya">`));
      } else if (`${body.name}` === 'Renaldo Moon aka Moon aka Muta') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/c/c9/Moon.jpg/revision/latest?cb=20181024233932" alt="picture of Moon">`));
      } else if (`${body.name}` === 'Cat King') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/3/37/Cat_King.jpg/revision/latest?cb=20181014013509" alt="picture of Cat King">`));
      } else if (`${body.name}` === 'Yuki') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG/revision/latest?cb=20170813030008" alt="picture of yuki">`));
      } else if (`${body.name}` === 'Haru') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg/revision/latest?cb=20181015014036" alt="picture of Haru">`));
      }  else if (`${body.name}` === 'Baron Humbert von Gikkingen') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/7/73/Baron.jpg/revision/latest?cb=20181015014514" alt="picture of Baron Humbert von Gikkingen">`));
      } else if (`${body.name}` === 'Natori') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg/revision/latest?cb=20181014014105" alt="picture of Natori">`));
      }
      $('#cat-content').show();
    }, function(error) {
      $('#cat-content').text(`There was an error. Error: ${error.message}`)
      $('#cat-content').show();
    });

  });
});

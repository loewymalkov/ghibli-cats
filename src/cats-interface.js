import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CatBio } from './cat-bio.js';
import { CatFilm } from './cat-film.js';

$(document).ready(function() {
  $('#cat-form').submit(function(event) {
    event.preventDefault();
    let catKey = $('#cat-list').val();

    let catBio = new CatBio();
    let promise = catBio.getBioByCat(catKey);
    let catFilm = new CatFilm();
    let filmPromise = catFilm.getFilmByCat(catKey);

    filmPromise.then(function(response) {
      const body = JSON.parse(response);
      $("#film").html(`<li class="list-group-item"> Title: ${body.title}</li><li class="list-group-item"> Director: ${body.director}</li><li class="list-group-item"> Producer: ${body.producer}</li> <li class="list-group-item"> Release Date: ${body.release_date}</li> <li class="list-group-item"> RT Score: ${body.rt_score}</li> <li class="list-group-item"> ${body.description}</li>`);
      $('#cat-content').show();
    });

    promise.then(function(response) {
      const body = JSON.parse(response);

      $('#bio').html(`<li class="list-group-item"> Name: ${body.name}</li> <li class="list-group-item"> Gender: ${body.gender}</li><li class="list-group-item"> Age: ${body.age}</li><li class="list-group-item"> Eye Color: ${body.eye_color}</li> <li class="list-group-item"> Hair Color: ${body.hair_color}</li>`);

      if (`${body.name}` === 'Jiji') {
        ($("#img").html(`<img src="https://data.whicdn.com/images/134165721/large.png" alt="picture of Jiji">`));
      } else if (`${body.name}` === 'Catbus') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg/revision/latest?cb=20181024032653" alt="picture of Catbus">`));
      } else if (`${body.name}` === 'Niya') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/5/5a/Niya.jpg/revision/latest?cb=20181030225242" alt="picture of Niya">`));
      } else if (`${body.name}` === 'Renaldo Moon aka Moon aka Muta') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/c/c9/Moon.jpg/revision/latest?cb=20181024233932" alt="picture of Moon">`));
      } else if (`${body.name}` === 'Cat King') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/3/37/Cat_King.jpg/revision/latest?cb=20181014013509" alt="picture of Cat King">`));
      } else if (`${body.name}` === 'Yuki') {
        ($("#img").html(`<img src="https://i.pinimg.com/originals/95/e9/14/95e914b3af8185bed1a756f09625e6e3.jpg" alt="picture of yuki">`));
      } else if (`${body.name}` === 'Haru') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg/revision/latest?cb=20181015014036" alt="picture of Haru">`));
      }  else if (`${body.name}` === 'Baron Humbert von Gikkingen') {
        ($("#img").html(`<img src="https://s3.narvii.com/image/ofenizr3i4aht6j45rrw4hojh4xbrigq_hq.jpg" alt="picture of Baron Humbert von Gikkingen">`));
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

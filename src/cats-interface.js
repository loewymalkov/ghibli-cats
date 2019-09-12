import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#cat-form').submit(function(event) {
    event.preventDefault();
    let catKey = $('#cat-list').val();

    let request = new XMLHttpRequest();
    const url = `https://ghibliapi.herokuapp.com/people/${catKey}`

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {

      $("#films").html(`To check out the movie it is in, click on <a href="${response.films[0]}">this</a>.`);
      $('#bio').html(`<li class="list-group-item"> Name: ${response.name}</li> <li class="list-group-item"> Eye Color: ${response.eye_color}</li> <li class="list-group-item"> Hair Color: ${response.hair_color}</li>`);

      if (`${response.name}` === 'Jiji') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/6/67/Jiji.png/revision/latest?cb=20110716012648" alt="picture of Jiji">`));
      } else if (`${response.name}` === 'Catbus') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg/revision/latest?cb=20181024032653" alt="picture of Catbus">`));
      } else if (`${response.name}` === 'Niya') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/5/5a/Niya.jpg/revision/latest?cb=20181030225242" alt="picture of Niya">`));
      } else if (`${response.name}` === 'Renaldo Moon aka Moon aka Muta') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/c/c9/Moon.jpg/revision/latest?cb=20181024233932" alt="picture of Moon">`));
      } else if (`${response.name}` === 'Cat King') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/3/37/Cat_King.jpg/revision/latest?cb=20181014013509" alt="picture of Cat King">`));
      } else if (`${response.name}` === 'Yuki') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG/revision/latest?cb=20170813030008" alt="picture of yuki">`));
      } else if (`${response.name}` === 'Haru') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg/revision/latest?cb=20181015014036" alt="picture of Haru">`));
      }  else if (`${response.name}` === 'Baron Humbert von Gikkingen') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/7/73/Baron.jpg/revision/latest?cb=20181015014514" alt="picture of Baron Humbert von Gikkingen">`));
      } else if (`${response.name}` === 'Natori') {
        ($("#img").html(`<img src="https://vignette.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg/revision/latest?cb=20181014014105" alt="picture of Natori">`));
      }
      $('#cat-content').show();
  };
});
});

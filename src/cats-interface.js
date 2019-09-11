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
      $('#output').text(`This cat is called ${response.name}. It has ${response.eye_color} eyes, and ${response.hair_color} hair. To check out the movies it is in, click on: ${response.films[0]}.`);



      // $('.output').text(`The color of ${response.} is ${response.main.humidity}%`);
      // $('.showTemp').text(`The weather is ${response.weather[0].main} forever.`);
    }
  });
});

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#cat-form').submit(function(event) {
    event.preventDefault();
    let catIndex = $('#cat-form').val();


    let request = new XMLHttpRequest();
    const url = `https://ghibliapi.herokuapp.com/species/${catIndex}/`

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      const cat0 = $('#output').text(`${response.name}`);

      // $('.output').text(`The color of ${response.} is ${response.main.humidity}%`);
      // $('.showTemp').text(`The weather is ${response.weather[0].main} forever.`);
    }
  });
});

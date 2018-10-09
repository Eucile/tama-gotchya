import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Tamagotchi from './functions.js';
import sleep from './img/sleep.gif';
import normal from './img/normal.gif';
import hungry from './img/hungry.gif';
import fun from './img/fun.gif';
import dead from './img/dead.gif';

$(document).ready(function() {

  let tama = new Tamagotchi('asuka');
  tama.setHunger();
  tama.setHappy();
  tama.setSleep();
  let tamaImg = new Image();
  tamaImg.src = './assets/img/normal.gif';
  $('.tama').html(tamaImg);
  let hunger = setInterval(foodTimer, 1000);
  let happy = setInterval(foodTimer, 1000);
  let sleepy = setInterval(foodTimer, 1000);


  function foodTimer() {
    $('.hunger-score span').text(tama.foodLevel);
    $('.happy-score span').text(tama.happyLevel);
    $('.sleep-score span').text(tama.sleepLevel);
    let boredTest = tama.isItBored();
    let hungerTest = tama.isItHungry();
    let deathTest = tama.didItDie();
    let okTest = tama.isItOk();
    let sleepyTest = tama.isItSleepy();

    if (deathTest === true ) {
      tamaDied();
      tamaImg.src = './assets/img/dead.gif';
      $('.tama').html(tamaImg);
    } else {
      if(okTest === true) {
        tamaImg.src = './assets/img/normal.gif';
        $('.tama').html(tamaImg);
      } else if (boredTest === true) {
        tamaImg.src = './assets/img/fun.gif';
        $('.tama').html(tamaImg);
      } else if (hungerTest === true) {
        tamaImg.src = './assets/img/hungry.gif';
        $('.tama').html(tamaImg);
      } else if(sleepyTest === true) {
        tamaImg.src = './assets/img/sleep.gif';
        $('.tama').html(tamaImg);
      } else {
        console.log('hi mom')
      }
    }
  }

  $('#feed-btn').click(function() {
    tama.feed();
    $('.hunger-score span').text(tama.foodLevel);
  });

  $('#play-btn').click(function() {
    tama.fun();
    $('.happy-score span').text(tama.happyLevel);
  });

  $('#sleep-btn').click(function() {
    tama.rest();
    $('.sleep-score span').text(tama.sleepLevel);
  });

  function tamaDied() {
    clearInterval(hunger);
    clearInterval(happy);
    clearInterval(sleepy);
  }



  $('#weather-btn').click(function() {
    let city = $('#city').val();
    $('#city').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dd3399bee06d5bac1305e8cee4634d69`).then(function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
    }).fail(function(error) {
      $('#errors').text("There was an error processing your request: ${error.responseText}. Please try again.");
    });
  });

  $('#random-btn').click(function() {
    $.ajax({
      url: `http://api.giphy.com/v1/gifs/random?api_key=AD8O568fDRKSYt8aYjhaBGwnhtrV8HRo&tag=cats`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.giph-box').html("<img src='" + response.data.images.downsized.url + "'/>");
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });

  $('#dino-btn').click(function() {
    var getDinos      = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15'),
    fillContainer = function(html) {
      $('#some-awesome-container').html(html);
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    };

    getDinos.then(fillContainer, oops);
  });

  $('#rover-btn').click(function() {
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?camera=FHAZ&api_key=t1VsyntIhxc5q03i1jdEE90m59I4IB3TDA9teDJV";
    // var url = "https://images-api.nasa.gov/asset/102693"

    $.ajax({
      url: url,

      success: function(result){
        if("copyright" in result) {
          $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
          $("#copyright").text("Image Credits: " + "Public Domain");
        }

        // if(result.media_type == "video") {
        //   $("#apod_img_id").css("display", "none");
        //   $("#apod_vid_id").attr("src", result.url);
        // }
        // else {
          $("#apod_vid_id").css("display", "none");
          $("#apod_img_id").attr("src", result.latest_photos[0].img_src);
        // }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result.latest_photos[0].img_src, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
      }
    });

  });
  $('#rhaz-btn').click(function() {
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?camera=RHAZ&api_key=t1VsyntIhxc5q03i1jdEE90m59I4IB3TDA9teDJV";
    // var url = "https://images-api.nasa.gov/asset/102693"

    $.ajax({
      url: url,

      success: function(result){
        if("copyright" in result) {
          $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
          $("#copyright").text("Image Credits: " + "Public Domain");
        }

        // if(result.media_type == "video") {
        //   $("#apod_img_id").css("display", "none");
        //   $("#apod_vid_id").attr("src", result.url);
        // }
        // else {
          $("#apod_vid_id").css("display", "none");
          $("#apod_img_id").attr("src", result.latest_photos[0].img_src);
        // }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result.latest_photos[0].img_src, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
      }
    });

  });
  $('#spirit-btn').click(function() {
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?camera=NAVCAM&api_key=t1VsyntIhxc5q03i1jdEE90m59I4IB3TDA9teDJV";
    // var url = "https://images-api.nasa.gov/asset/102693"

    $.ajax({
      url: url,

      success: function(result){
        if("copyright" in result) {
          $("#copyright").text("Image Credits: " + result.copyright);
        }
        else {
          $("#copyright").text("Image Credits: " + "Public Domain");
        }

        // if(result.media_type == "video") {
        //   $("#apod_img_id").css("display", "none");
        //   $("#apod_vid_id").attr("src", result.url);
        // }
        // else {
          $("#apod_vid_id").css("display", "none");
          $("#apod_img_id").attr("src", result.latest_photos[0].img_src);
        // }
        $("#reqObject").text(url);
        $("#returnObject").text(JSON.stringify(result.latest_photos[0].img_src, null, 4));
        $("#apod_explaination").text(result.explanation);
        $("#apod_title").text(result.title);
      }
    });

  });

  // $('#spirit-btn').click(function() {
  //   var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?camera=NAVCAM&api_key=t1VsyntIhxc5q03i1jdEE90m59I4IB3TDA9teDJV";
  //   // var url = "https://images-api.nasa.gov/asset/102693"
  //
  //   $.ajax({
  //     url: url,
  //
  //     success: function(result){
  //       if("copyright" in result) {
  //         $("#copyright").text("Image Credits: " + result.copyright);
  //       }
  //       else {
  //         $("#copyright").text("Image Credits: " + "Public Domain");
  //       }
  //
  //       // if(result.media_type == "video") {
  //       //   $("#apod_img_id").css("display", "none");
  //       //   $("#apod_vid_id").attr("src", result.url);
  //       // }
  //       // else {
  //         $("#apod_vid_id").css("display", "none");
  //         $("#apod_img_id").attr("src", result.latest_photos[0].img_src);
  //       // }
  //       $("#reqObject").text(url);
  //       $("#returnObject").text(JSON.stringify(result.latest_photos[0].img_src, null, 4));
  //       $("#apod_explaination").text(result.explanation);
  //       $("#apod_title").text(result.title);
  //     }
  //   });
  //
  // });


});

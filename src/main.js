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
});

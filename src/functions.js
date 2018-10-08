export default class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.happyLevel = 10;
    this.sleepLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setHappy() {
    setInterval(() => {
      this.happyLevel--;
    }, 2000);
  }

  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 3000);
  }

  didItDie() {
    if (this.foodLevel <= 0 || this.happyLevel <= 0 || this.sleepLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  isItHungry() {
    if(this.foodLevel <= 5 && this.foodLevel > 0) {
      return true;
    } else {
      return false;
    }
  }

  isItBored() {
    if(this.happyLevel <= 5 && this.happyLevel > 0) {
      return true
    } else {
      return false
    }
  }
  isItSleepy() {
    if(this.sleepLevel <= 5 && this.sleepLevel > 0) {
      return true
    } else {
      return false
    }
  }

  isItOk() {
    if(this.happyLevel > 5 && this.foodLevel > 5 && this.sleepLevel > 5) {
      return true
    } else {
      return false
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  fun() {
    this.happyLevel = 10;
  }

  rest() {
    this.sleepLevel = 10;
  }
}

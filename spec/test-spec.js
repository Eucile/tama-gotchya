import Tamagotchi from './../src/functions.js';

describe('Tamagotchi', function() {

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    let asuka = new Tamagotchi("asuka");
    expect(asuka.name).toEqual("asuka");
    expect(asuka.foodLevel).toEqual(10);
  });

  it('should have a happy level of 7 after 3001 milliseconds', function() {
    let asuka = new Tamagotchi("asuka");
    asuka.setHappy();
    jasmine.clock().tick(3001);
    expect(asuka.happyLevel).toEqual(7);
    console.log(asuka.happyLevel);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    let asuka = new Tamagotchi("asuka");
    asuka.setHunger();
    jasmine.clock().tick(3001);
    expect(asuka.foodLevel).toEqual(7);
  });
  it('should have a sleep level of 7 after 3001 milliseconds', function() {
    let asuka = new Tamagotchi("asuka");
    asuka.setSleep();
    jasmine.clock().tick(3001);
    expect(asuka.sleepLevel).toEqual(7);
  });

  // it('should get very hungry if the food level drops below zero', function() {
  //   asuka.foodLevel = 0;
  //   expect(asuka.didItDie()).toEqual(true);
  // });
  //
  // it('should get very hungry if 10 seconds pass without feeding', function() {
  //   jasmine.clock().tick(10001);
  //   expect(asuka.didItDie()).toEqual(true);
  // });
  //
  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   asuka.feed();
  //   expect(asuka.foodLevel).toEqual(10);
  // });

});

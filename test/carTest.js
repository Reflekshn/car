const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

describe("#shouldBuyCar()", function() { // 3

  it("should return true when the car is pink", function() { // 4
    const car = {
      price: 10000,
      color: 'pink',
      type: 'sedan',
      litresPer100km: 7
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when there are no details about the car", function() {
    const car = {};
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback", function() {
    const car = {
      price: 2500,
      color: 'black',
      type: 'hatchback',
      litresPer100km: 8
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback and pink", function() {
    const car = {
      price: 4000,
      color: 'pink',
      type: 'hatchback',
      litresPer100km: 8
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car has 6 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 3500,
      color: 'blue',
      type: 'compact',
      litresPer100km: 6
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return true when the car has 11 litres/100km and is under or equal to 5,000", function() {
    const car = {
      price: 5000,
      color: 'black',
      type: 'suv',
      litresPer100km: 11
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when the car has 6 litres/100km and is over $5,000", function() {
    const car = {
      price: 10000,
      color: 'red',
      type: 'sedan',
      litresPer100km: 6
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 11 litres/100km and is over $5,000", function() {
    const car = {
      price: 8500,
      color: 'blue',
      type: 'suv',
      litresPer100km: 11
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 5 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 1000,
      color:'yellow',
      type: 'compact',
      litresPer100km: 5
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car has 12 litres/100km and is under or equal to $5,000", function() {
    const car = {
      price: 5000,
      color: 'red',
      type: 'truck',
      litresPer100km: 12
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return undefined when there is no car", function() {
    let car;
    const shouldBuy = shouldBuyCar(car);
    assert.isUndefined(shouldBuy);
  });
});
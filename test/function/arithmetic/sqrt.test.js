// test sqrt
var assert = require('assert'),
    approx = require('../../../tools/approx'),
    math = require('../../../index')(),
    sqrt = math.sqrt,
    bignumber = math.bignumber;

describe('sqrt', function() {
  it('should return the square root of a boolean', function () {
    assert.equal(sqrt(true), 1);
    assert.equal(sqrt(false), 0);
  });

  it('should return the square root of a number', function() {
    assert.equal(sqrt(0), 0);
    assert.equal(sqrt(1), 1);
    assert.equal(sqrt(4), 2);
    assert.equal(sqrt(9), 3);
    assert.equal(sqrt(16), 4);
    assert.equal(sqrt(25), 5);

    assert.equal(sqrt(-4), '2i');
  });

  it('should return the square root of a big number', function() {
    assert.deepEqual(sqrt(bignumber(0)), bignumber(0));
    assert.deepEqual(sqrt(bignumber(1)), bignumber(1));
    assert.deepEqual(sqrt(bignumber(4)), bignumber(2));
    assert.deepEqual(sqrt(bignumber(9)), bignumber(3));
    assert.deepEqual(sqrt(bignumber(16)), bignumber(4));
    assert.deepEqual(sqrt(bignumber(25)), bignumber(5));
  });

  it('should return the square root of a complex number', function() {
    assert.equal(sqrt(math.complex(3, -4)), '2 - i');
  });

  it('should throw an error when used with a unit', function() {
    assert.throws(function () {
      sqrt(math.unit(5, 'km'));
    });
  });

  it('should throw an error when used with a string', function() {
    assert.throws(function () {
      sqrt('a string');
    });
  });

  it('should return the square root of each element of a matrix', function() {
    assert.deepEqual(sqrt([4,9,16,25]), [2,3,4,5]);
    assert.deepEqual(sqrt([[4,9],[16,25]]), [[2,3],[4,5]]);
    assert.deepEqual(sqrt(math.matrix([[4,9],[16,25]])), math.matrix([[2,3],[4,5]]));
  });

});
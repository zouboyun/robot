var assert = require('assert');
var a = require('../ab.js').a;
var b = require('../ab.js').b;

describe('Functions a and b', function() {
  describe('Function a', function() {
    // takes in two parameters
    // first is an array of arrays
    // second param is a function
    // returns an array
    // which is the product of the arrays passed in
    it('should return the product of the two arrays passed in', function() {
      var testArray0 = [1, 2, 3];
      var testArray1 = [1, 2, 3];
      var testFunction = function(x, y) {
        return x * y;
      };
      var testResult = a([testArray0, testArray1], testFunction);
      var expectedResult = [1, 4, 9];
      /* we're going to compare the 1 with 1
      compare the 4 with 4
      and compare the 9 with 9
      and we're going to do that with a for loop
      */
      assert.equal(testResult.length, expectedResult.length);
      for (var i = 0; i < testResult.length; i++) {
        assert.equal(testResult[i], expectedResult[i]);
      };      
    });
    it('should return the sum of the two arrays passed in', function() {
      var testArray0 = [1, 2, 3];
      var testArray1 = [1, 2, 3];
      var testFunction = function(x, y) {
        return x + y;
      };
      var testResult = a([testArray0, testArray1], testFunction);
      var expectedResult = [2, 4, 6];
      assert.equal(testResult.length, expectedResult.length);
      for (var i = 0; i < testResult.length; i++) {
        assert.equal(testResult[i], expectedResult[i]);
      }; 
    });
  });
  describe('Function b', function() {
    // takes in two parameters
    // first is an array of integers
    // second param is a function
    // returns an integer
    // which is the aggregation defined by the input function of the array passed in
    it('should return the product of the array passed in', function() {
      var testArray = [1, 2, 4];
      var testFunction = function(x, y) {
        return x * y;
      };
      var testResult = b(testArray, testFunction);
      var expectedResult = 8;
      assert.equal(testResult, expectedResult);
    });
    it('should return the sum of the array passed in', function() {
      var testArray = [1, 2, 4];
      var testFunction = function(x, y) {
        return x + y;
      };
      var testResult = b(testArray, testFunction);
      var expectedResult = 7;
      assert.equal(testResult, expectedResult);
    });
  });
  describe('javascript equalities', function(){
    describe('weak equalities', function(){
      describe('primatives', function(){
        it('should be equal if two primatives are the same value', function(){
          var a = 1;
          var b = 1;
          assert.equal(a, b);
        });
        it('should be equal if two primatives are the same value (strings)', function(){
          var a = 'foo';
          var b = 'foo';
          assert.equal(a, b);
        });
        it('should not be equal if two primatives are not the same value (strings)', function(){
          var a = 'foo';
          var b = 'foo';
          b += 'b';
          assert.notEqual(a, b);
        });
        it('should not be equal if two primatives are not the same value (a=b)', function(){
          var a = 3;
          var b = a;
          a += 1;
          assert.notEqual(a, b);
        });
        it('should not be equal if two primatives are not the same value (a=b), strings', function(){
          var a = 'foo';
          var b = a;
          a += 'b';
          assert.notEqual(a, b);
        });
      });
      describe('non-primatives', function(){
        it('should be equal if two primatives are the same value', function(){
          var a = [1];
          var b = [1];
          assert.notEqual(a, b);
        });
        it('should be equal if two primatives are the same value (strings)', function(){
          var a = ['f', 'o', 'o'];
          var b = ['f', 'o', 'o'];
          assert.equal(a.join(''), b.join(''));
        });
        it('should be equal if two primatives are the same value (strings)', function(){
          var a = ['f', 'o', 'o'];
          var b = a;
          assert.equal(a.join(''), b.join(''));
        });
        it('should be equal if two primatives are the same value (strings)', function(){
          var a = ['f', 'o', 'o'];
          var b = a;
          b.push('b');
          assert.equal(a.join(''), b.join(''));
        });
      });
    });
  });
});
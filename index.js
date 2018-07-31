'use strict';

module.exports = function npmTestOdd(value) {
  const n = Math.abs(value);
  return (n % 2) === 1;
};
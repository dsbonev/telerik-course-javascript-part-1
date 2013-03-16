(function () {
  'use strict';

  (function () {
    console.log('');
    console.log('Write a script that prints all the numbers from 1 to N');

    var maxNum = getRandomInt(10, 20);

    console.log('numbers to', maxNum);
    for (var i = 1; i <= maxNum; i += 1) {
      console.log(i);
    }
  })();

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time');

    var maxNum = getRandomInt(10, 22);

    console.log('numbers to', maxNum);
    for (var i = 1; i <= maxNum; i += 1) {
      if (i % 7 !== 0 && i % 3 !== 0) {
        console.log(i);
      }
    }
  })();

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'finds the max and min numbers from a sequence of numbers');

    var numbers = [],
      numbCount = 5;

    for (var i = 1; i <= numbCount; i += 1) {
      numbers.push(getRandomInt(0, 9));
    }

    console.log('numbers:', numbers.toString());

    var min,
      max,
      current;

    min = max = numbers[0];

    for (i = 1; i < numbers.length; i += 1) {
      current = numbers[i];

      if (current < min) {
        min = current;
      } else if (current > max) {
        max = current;
      }
    }

    console.log('min:', min, ', max:', max);
  })();

  (function () {
    console.log('');
    console.log('Write a script that ' +
      'finds the lexicographically smallest and largest property in ' +
      'document, window and navigator objects');

    function getMinMaxPropertyNames(object) {
      var current, min, max;

      for (current in object) {
        if (min == null) {
          min = max = current;
          continue;
        }

        if (current < min) {
          min = current;
        } else if (current > max) {
          max = current;
        }
      }

      return [min, max];
    }

    console.log('document:', getMinMaxPropertyNames(document).toString());
    console.log('window:', getMinMaxPropertyNames(window).toString());
    console.log('navigator:', getMinMaxPropertyNames(navigator).toString());
  })();

  //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

})();
